#!/bin/bash

echo "Copying custom default.conf over to /etc/nginx/sites-available/default.conf"

NGINX_CONF=/home/site/wwwroot/default.conf
APP_ROOT=/home/site/wwwroot

echo "✔ Starting Laravel app on Azure..."

# Step 1: Ensure NGINX is configured
if [ -f /home/site/wwwroot/default.conf ]; then
    echo "✔ Copying custom NGINX config..."
    cp /home/site/wwwroot/default.conf /etc/nginx/sites-available/default
else
    echo "⚠ No custom NGINX config found. Using default."
fi

# Step 2: Set permissions (optional, but good practice)
chmod -R 775 /home/site/wwwroot/storage /home/site/wwwroot/bootstrap/cache

# Step 3: Generate APP_KEY if missing
cd /home/site/wwwroot
if grep -q 'APP_KEY=base64:' .env; then
    echo "✔ APP_KEY exists."
else
    echo "✔ Generating APP_KEY..."
    php artisan key:generate
fi

# Step 4: Start PHP-FPM and NGINX
echo "✔ Starting PHP-FPM and NGINX..."
service php8.3-fpm start
service nginx start

# Keep container alive
echo "✔ Laravel container ready. Tailing logs..."
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
