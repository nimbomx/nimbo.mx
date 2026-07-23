FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx index.html 404.html styles.css script.js robots.txt sitemap.xml /usr/share/nginx/html/
COPY --chown=nginx:nginx assets/ /usr/share/nginx/html/assets/

USER nginx
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O - http://127.0.0.1:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
