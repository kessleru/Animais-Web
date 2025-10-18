# 🚀 Guia de Inicialização VPS - Animais Web

## 📋 Checklist Rápido
**Na maioria das vezes, após religar a VPS:**

### 1. Aguardar 2-3 minutos (containers sobem automaticamente)

### 2. Testar o Site
- No navegador: `https://kessleru.dev`
- Verificar certificado SSL válido
- Testar também: `https://www.kessleru.dev`

### 3. Se NÃO funcionar (raro), conectar via SSH:
```bash
ssh usuario@20.201.72.68
cd ~/Animais-Web
sudo docker ps
# Se não aparecer containers, rodar:
sudo docker-compose up -d
```

**✨ Nota:** Os containers têm `restart: unless-stopped`, então sobem automaticamente!

---

## 🔧 Comandos Úteis Diários

### Atualizar o Site (após git push)
```bash
cd ~/Animais-Web
git pull
sudo docker-compose up -d --build
```

### Ver Logs em Tempo Real
```bash
# Logs do Caddy (proxy/SSL)
sudo docker logs -f caddy

# Logs do site
sudo docker logs -f animais-web

# Logs de ambos
sudo docker-compose logs -f
```

### Reiniciar Serviços
```bash
# Reiniciar tudo
sudo docker-compose restart

# Reiniciar só o proxy
sudo docker-compose restart caddy

# Reiniciar só o app
sudo docker-compose restart animais-web
```

### Parar/Subir Serviços
```bash
# Parar tudo
sudo docker-compose down

# Subir tudo
sudo docker-compose up -d

# Subir e reconstruir
sudo docker-compose up -d --build
```

---

## 🆘 Resolução de Problemas

### Site não carrega
1. Verificar se containers estão rodando:
   ```bash
   sudo docker ps
   ```

2. Se não estiver, subir:
   ```bash
   sudo docker-compose up -d
   ```

3. Verificar logs de erro:
   ```bash
   sudo docker logs caddy
   sudo docker logs animais-web
   ```

### Certificado SSL expirado/problema
1. Verificar logs do Caddy:
   ```bash
   sudo docker logs caddy | grep -i cert
   ```

2. Forçar renovação (reiniciando Caddy):
   ```bash
   sudo docker-compose restart caddy
   ```

### DNS não resolve
1. Verificar se DNS ainda aponta para o IP:
   ```bash
   nslookup kessleru.dev
   # Deve retornar: 20.201.72.68
   ```

2. Se IP mudou, atualizar no Name.com

### Erro de permissão Docker
```bash
# Adicionar usuário ao grupo docker (uma vez só)
sudo usermod -aG docker $USER
newgrp docker

# Ou usar sudo sempre
sudo docker-compose up -d
```

---

## 📊 Monitoramento

### Verificar Status Geral
```bash
# Espaço em disco
df -h

# Uso de memória
free -h

# Containers rodando
sudo docker ps

# Uso de recursos dos containers
sudo docker stats
```

### Verificar Certificados SSL
```bash
# Ver quando expira
sudo docker exec caddy caddy list-certificates

# Ou no navegador verificar o cadeado 🔒
```

---

## 🎯 Comandos de Uma Linha

### Reinício Completo
```bash
cd ~/Animais-Web && sudo docker-compose down && sudo docker-compose up -d
```

### Atualização Completa
```bash
cd ~/Animais-Web && git pull && sudo docker-compose down && sudo docker-compose up -d --build
```

### Status Rápido
```bash
sudo docker ps && curl -I https://kessleru.dev
```

---

## 📝 Notas Importantes

- **IP da VPS:** `20.201.72.68`
- **Domínios:** `https://kessleru.dev` e `https://www.kessleru.dev`
- **Certificados:** Renovam automaticamente (Let's Encrypt via Caddy)
- **Volumes:** Certificados ficam salvos em `caddy_data` (persistem entre reinicializações)
- **Portas:** 80 (HTTP→HTTPS) e 443 (HTTPS) abertas no NSG Azure

### Em Caso de Emergência
Se nada funcionar, reconstruir do zero:
```bash
cd ~
rm -rf Animais-Web
git clone https://github.com/kessleru/Animais-Web.git
cd Animais-Web
sudo docker-compose up -d --build
```

---

**💡 Dica:** Salve este arquivo e deixe sempre à mão! 
**🚀 Site:** https://kessleru.dev