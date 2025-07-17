#!/bin/bash

echo "🔧 Starting custom startup script..."

NGINX_CONF="/home/site/wwwroot/default.conf"
NGINX_TARGET="/etc/nginx/sites-available/default"

# Use custom Nginx config if available
if [ -f "$NGINX_CONF" ]; then
    echo "📁 Found custom nginx config. Applying..."
    cp "$NGINX_CONF" "$NGINX_TARGET"
else
    echo "⚠️ No custom nginx config found at $NGINX_CONF"
fi

# Start services
echo "🚀 Starting php-fpm and nginx..."
service php8.3-fpm start
service nginx restart

echo "✅ Services started. Keeping container alive..."
tail -f /dev/null
