# Use Python Alpine (leve e rápido)
FROM python:3.11-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar todos os arquivos do site
COPY index.html .
COPY css ./css
COPY js ./js
COPY img ./img

# Expor porta 80
EXPOSE 80

# Iniciar servidor HTTP simples
CMD ["python", "-m", "http.server", "80"]
