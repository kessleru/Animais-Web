# Use nginx como servidor web
FROM nginx:alpine

# Copie a configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie apenas os arquivos necessários do site
COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img

# Exponha a porta 80
EXPOSE 80

# O nginx será iniciado automaticamente
CMD ["nginx", "-g", "daemon off;"]
