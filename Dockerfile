# Use nginx como servidor web
FROM nginx:alpine

# Copie os arquivos do site para o diretório padrão do nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# O nginx será iniciado automaticamente
CMD ["nginx", "-g", "daemon off;"]
