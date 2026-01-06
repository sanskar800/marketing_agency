# Browser Caching Configuration for Production

## For Apache (.htaccess)
```apache
# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Leverage browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  
  # Fonts
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType application/font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
  
  # HTML
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Cache-Control Headers
<IfModule mod_headers.c>
  <FilesMatch "\\.(jpg|jpeg|png|gif|webp|svg|ico)$">
    Header set Cache-Control "max-age=31536000, public"
  </FilesMatch>
  
  <FilesMatch "\\.(css|js)$">
    Header set Cache-Control "max-age=2592000, public"
  </FilesMatch>
  
  <FilesMatch "\\.(woff|woff2|ttf|eot)$">
    Header set Cache-Control "max-age=31536000, public"
  </FilesMatch>
</IfModule>
```

## For Nginx (nginx.conf)
```nginx
# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

# Browser caching
location ~* \\.(jpg|jpeg|png|gif|webp|svg|ico)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \\.(css|js)$ {
    expires 30d;
    add_header Cache-Control "public";
}

location ~* \\.(woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location = /index.html {
    expires 0;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## Implementation Instructions

1. **For Apache Hosting**: Copy the Apache configuration to a `.htaccess` file in your public directory
2. **For Nginx Hosting**: Add the Nginx configuration to your server block in nginx.conf
3. **For Vercel/Netlify**: These platforms handle caching automatically, but you can customize via `vercel.json` or `netlify.toml`

## Additional Performance Tips

- Use CDN for static assets
- Enable HTTP/2 or HTTP/3 if available
- Implement service workers for offline caching
- Use WebP format for images where possible
- Lazy load images below the fold
