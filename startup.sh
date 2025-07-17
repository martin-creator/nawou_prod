#!/bin/bash

echo "Copying custom default.conf over to /etc/nginx/sites-available/default.conf"

NGINX_CONF=/home/site/wwwroot/default.conf

if [ -f "$NGINX_CONF" ]; then
    cp /home/site/wwwroot/default.conf /etc/nginx/sites-available/default
    service nginx reload
else
    echo "File does not exist, skipping cp."
fi


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
