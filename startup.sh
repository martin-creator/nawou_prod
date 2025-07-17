#!/bin/bash

echo "Copying custom default.conf over to /etc/nginx/sites-available/default.conf"

NGINX_CONF=/home/site/wwwroot/default.conf
APP_ROOT=/home/site/wwwroot

# 1. Copy custom Nginx config
if [ -f "$NGINX_CONF" ]; then
    cp "$NGINX_CONF" /etc/nginx/sites-available/default
    echo "Reloading Nginx..."
    service nginx reload
else
    echo "File does not exist, skipping copy."
fi

# 2. Ensure .env exists
if [ ! -f "$APP_ROOT/.env" ]; then
    echo ".env file not found. Attempting to create from .env.example..."
    if [ -f "$APP_ROOT/.env.example" ]; then
        cp "$APP_ROOT/.env.example" "$APP_ROOT/.env"
        echo "Copied .env.example to .env"
    else
        echo "ERROR: Neither .env nor .env.example found."
        exit 1
    fi
fi

# 3. Run composer install if vendor folder is missing
if [ ! -d "$APP_ROOT/vendor" ]; then
    echo "vendor directory missing. Running composer install..."
    cd "$APP_ROOT"
    composer install --no-dev --optimize-autoloader
fi

# # 4. Generate APP_KEY if missing
# if ! grep -q "^APP_KEY=" "$APP_ROOT/.env" || grep -q "^APP_KEY=$" "$APP_ROOT/.env"; then
#     echo "Generating Laravel APP_KEY..."
#     cd "$APP_ROOT"
#     php artisan key:generate
# fi

# (Optional) Laravel cache setup
php artisan config:cache
php artisan route:cache
php artisan view:cache


# # --- Paths ---
# APP_ROOT="/home/site/wwwroot"
# NGINX_CONF="$APP_ROOT/default.conf"
# NGINX_TARGET="/etc/nginx/conf.d/default.conf"


# if [ -f "$NGINX_CONF" ]; then
#     cp /home/site/wwwroot/default.conf /etc/nginx/sites-available/default
#     service nginx reload
# else
#     echo "File does not exist, skipping cp."
# fi

# # --- Step 3: PHP-FPM Setup ---
# echo "Setting up PHP-FPM..."

# mkdir -p /run/php
# chown www-data:www-data /run/php

# pkill -f "php-fpm" || true
# php-fpm -D -y /usr/local/etc/php-fpm.conf




# echo "----- Services Started Successfully [$(date)] -----"
# echo "PHP-FPM PID: $(pgrep -f "php-fpm")"
# echo "Nginx PID: $(pgrep "nginx")"
