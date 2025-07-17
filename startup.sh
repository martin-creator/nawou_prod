#!/bin/bash

echo "Starting custom startup script..."

NGINX_CONF=/home/site/wwwroot/default.conf

if [ -f "$NGINX_CONF" ]; then
    echo "Using custom nginx config..."
    cp "$NGINX_CONF" /etc/nginx/sites-available/default
else
    echo "No custom nginx config found"
fi

# Start PHP and Nginx
echo "Starting php-fpm and nginx..."
service php8.3-fpm start
service nginx start

# Keep the container alive
tail -f /dev/null
