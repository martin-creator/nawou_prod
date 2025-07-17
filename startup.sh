#!/bin/bash

echo "🔧 Starting Laravel app on Azure..."

NGINX_CONF=/home/site/wwwroot/default.conf
APP_ROOT=/home/site/wwwroot

# Step 1: Set up NGINX
if [ -f "$NGINX_CONF" ]; then
    echo "✔ Copying custom NGINX config to /etc/nginx/sites-available/default"
    cp "$NGINX_CONF" /etc/nginx/sites-available/default
else
    echo "⚠ No custom NGINX config found at $NGINX_CONF. Using default."
fi

# Step 2: Ensure correct permissions
echo "✔ Setting permissions for storage and cache..."
chmod -R 775 $APP_ROOT/storage $APP_ROOT/bootstrap/cache

# Step 3: Check and generate .env if missing
if [ ! -f "$APP_ROOT/.env" ]; then
    echo "⚠ .env file not found. Creating a minimal default one..."
    cp "$APP_ROOT/.env.example" "$APP_ROOT/.env"
fi

# Step 4: Generate APP_KEY if not already set
cd $APP_ROOT
if grep -q '^APP_KEY=base64:' .env; then
    echo "✔ APP_KEY exists."
else
    echo "🔑 Generating APP_KEY..."
    php artisan key:generate
fi

# Step 5: Start PHP-FPM and NGINX
echo "🚀 Starting services..."
service php8.3-fpm start
service nginx start

# Step 6: Run migrations (optional - comment out if not needed)
# echo "🛠 Running database migrations..."
# php artisan migrate --force

# Step 7: Keep the container alive
echo "📌 Laravel container ready. Tailing logs..."
tail -f /dev/null




# (Optional) Laravel cache setup
# php artisan config:cache
# php artisan route:cache
# php artisan view:cache


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
