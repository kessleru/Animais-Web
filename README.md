# 🦊 Animais Fantásticos

Site interativo sobre animais selvagens com navegação moderna e animações suaves.

🌐 **[kessleru.dev](https://kessleru.dev)**

## 💡 Sobre

Projeto educacional focado em tecnologias web fundamentais: HTML5, CSS3 (Grid/Flexbox) e JavaScript ES6+ vanilla.

## ✨ Funcionalidades

- Navegação por abas entre diferentes animais
- FAQ com efeito acordeão
- Scroll suave e animações de entrada
- Modal de login interativo
- Design responsivo

## 🛠️ Stack

**Frontend:** HTML5, CSS3, JavaScript ES6 Modules

**Infraestrutura:** Docker, Caddy, Let's Encrypt, Azure VPS

## 🚀 Executar Localmente

```bash
git clone https://github.com/kessleru/Animais-Web.git
cd Animais-Web

# Com Python
python -m http.server 8000

# Ou com Docker
docker-compose up -d
```

Acesse: `http://localhost:8000`

## 📂 Estrutura

```
Animais-Web/
├── index.html
├── css/
│   ├── style.css
│   ├── geral.css
│   └── modal.css
├── js/
│   ├── script.js
│   └── modules/
│       ├── accordion.js
│       ├── modal.js
│       ├── scroll-animacao.js
│       ├── scroll-suave.js
│       └── tabnav.js
└── img/
```

## 🔒 Produção

- HTTPS automático via Caddy + Let's Encrypt
- Domínio `.dev` com HSTS preloading
- Firewall configurado (Azure NSG)
- Deploy containerizado

---

⭐ [kessleru.dev](https://kessleru.dev)
