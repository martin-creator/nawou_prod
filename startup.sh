#!/bin/bash
set -euo pipefail

# --- Logging Setup ---
mkdir -p /home/logs
LOG_FILE="/home/logs/startup.log"
exec > >(tee -a "$LOG_FILE") 2>&1
echo "----- Startup Script Execution Started [$(date)] -----"

# --- Paths ---
APP_ROOT="/home/site/wwwroot"
NGINX_CONF="$APP_ROOT/default.conf"
NGINX_TARGET="/etc/nginx/conf.d/default.conf"

# --- Step 1: Custom Nginx Configuration ---
echo "Checking for custom Nginx configuration..."
if [ -f "$NGINX_CONF" ]; then
    echo "Found custom configuration. Deploying..."
    cp -v "$NGINX_CONF" "$NGINX_TARGET"
    
    if ! nginx -t; then
        echo "ERROR: Invalid Nginx configuration"
        exit 1
    fi

    service nginx stop || true
else
    echo "No custom Nginx configuration found. Using defaults."
fi

# --- Step 2: Laravel Setup ---
echo "Preparing Laravel environment..."

# Set proper permissions
chmod -R 775 "$APP_ROOT/storage" "$APP_ROOT/bootstrap/cache"
chown -R www-data:www-data "$APP_ROOT"

# Laravel required directories check
for dir in "$APP_ROOT/storage/framework" "$APP_ROOT/public/build"; do
    if [ ! -d "$dir" ]; then
        echo "ERROR: Missing required directory: $dir"
        exit 1
    fi
done

# Optional: Laravel cache clear (use only if needed)
# php artisan config:clear
# php artisan route:clear
# php artisan view:clear

# --- Step 3: PHP-FPM Setup ---
echo "Setting up PHP-FPM..."

mkdir -p /run/php
chown www-data:www-data /run/php

echo "Stopping any existing PHP-FPM..."
pkill -f "php-fpm" || true

echo "Starting PHP-FPM..."
php-fpm -D -y /usr/local/etc/php-fpm.conf

# --- Step 4: Start Nginx ---
echo "Starting Nginx..."
service nginx start

# --- Step 5: Health Checks ---
echo "Performing health checks..."
sleep 5

if ! pgrep -f "php-fpm" >/dev/null; then
    echo "ERROR: PHP-FPM failed to start"
    exit 1
fi

if ! pgrep "nginx" >/dev/null; then
    echo "ERROR: Nginx failed to start"
    exit 1
fi

echo "----- Services Started Successfully [$(date)] -----"
echo "PHP-FPM PID: $(pgrep -f "php-fpm")"
echo "Nginx PID: $(pgrep "nginx")"
