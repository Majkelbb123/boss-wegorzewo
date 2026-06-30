#!/bin/bash
set -e

echo "=== 1. Kopiowanie plików strony ==="
cp -r /home/michal/projekt-web/dist/* /var/www/boss-projekt/
chown -R www-data:www-data /var/www/boss-projekt/
echo "✓ Pliki skopiowane"

echo "=== 2. Konfiguracja nginx (dodanie proxy /api) ==="
cat > /etc/nginx/sites-available/boss-projekt << 'EOF'
server {
    listen 8080;
    server_name _;

    root /var/www/boss-projekt;
    index index.html;

    # React Router — wszystkie ścieżki kieruj do index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API — przekaż do serwera Express na porcie 3001
    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Statyczne pliki — długi cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    access_log /var/log/nginx/boss-projekt.access.log;
    error_log  /var/log/nginx/boss-projekt.error.log;
}
EOF
echo "✓ Konfiguracja nginx zapisana"

echo "=== 3. Przeładowanie nginx ==="
nginx -t && systemctl reload nginx
echo "✓ Nginx przeładowany"

echo "=== 4. Instalacja PM2 (autostart API) ==="
source /home/michal/.nvm/nvm.sh
npm install -g pm2 2>/dev/null | tail -1

echo "=== 5. Uruchomienie API przez PM2 ==="
pm2 delete boss-api 2>/dev/null || true
pm2 start /home/michal/projekt-web/api/index.js \
    --name boss-api \
    --cwd /home/michal/projekt-web/api \
    --log /home/michal/projekt-web/api/pm2.log \
    --time
pm2 save

echo "=== 6. Autostart PM2 po restarcie serwera ==="
pm2 startup systemd -u michal --hp /home/michal | tail -3

echo ""
echo "✅ GOTOWE! Strona działa pod adresem:"
echo "   http://141.94.158.2:8080"
echo ""
echo "Status API:"
sleep 2 && curl -s http://localhost:3001/api/ping
