#!/bin/bash
set -euo pipefail

# Create logs directory if it doesn't exist
mkdir -p /home/logs

# Initialize logging
LOG_FILE="/home/logs/startup.log"
exec > >(tee -a "$LOG_FILE") 2>&1
echo "----- Startup Script Execution Started [$(date)] -----"

# 1. Configure Nginx
NGINX_CONF="/home/site/wwwroot/default.conf"
NGINX_TARGET="/etc/nginx/conf.d/default.conf"

echo "Checking for custom Nginx configuration..."
if [ -f "$NGINX_CONF" ]; then
    echo "Found custom configuration. Deploying..."
    cp -v "$NGINX_CONF" "$NGINX_TARGET"
    
    # Validate configuration
    if ! nginx -t; then
        echo "ERROR: Invalid Nginx configuration"
        exit 1
    fi
    
    # Stop any existing nginx (fixes 'Address already in use' errors)
    service nginx stop || true
else
    echo "No custom Nginx configuration found. Using defaults."
fi

# 2. Prepare Laravel Environment
echo "Preparing Laravel environment..."
APP_ROOT="/home/site/wwwroot"

# Set proper permissions
chmod -R 775 "$APP_ROOT/storage" "$APP_ROOT/bootstrap/cache"
chown -R www-data:www-data "$APP_ROOT"

# Verify critical directories
for dir in "$APP_ROOT/public/build" "$APP_ROOT/storage/framework"; do
    if [ ! -d "$dir" ]; then
        echo "ERROR: Missing required directory: $dir"
        exit 1
    fi
done

# 3. Start Services
echo "Stopping any existing PHP-FPM..."
pkill -f "php-fpm" || true

echo "Starting PHP-FPM..."
php-fpm -D -y /usr/local/etc/php-fpm.conf

echo "Starting Nginx..."
service nginx start

# 4. Health Check
echo "Performing health checks..."
sleep 5  # Allow services to start

# Check PHP-FPM
if ! pgrep -f "php-fpm" >/dev/null; then
    echo "ERROR: PHP-FPM failed to start"
    exit 1
fi

# Check Nginx
if ! pgrep "nginx" >/dev/null; then
    echo "ERROR: Nginx failed to start"
    exit 1
fi

echo "----- Services Started Successfully [$(date)] -----"
echo "PHP-FPM PID: $(pgrep -f "php-fpm")"
echo "Nginx PID: $(pgrep "nginx")"