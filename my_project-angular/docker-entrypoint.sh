#!/bin/sh
# Replace placeholder with the actual environment variable value
sed -i "s|\${BACKEND_URL}|$BACKEND_URL|g" /usr/share/nginx/html/assets/env.js

# Start Nginx
exec "$@"