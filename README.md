# 🦊 Animais Fantásticos

Um site interativo sobre animais selvagens com navegação moderna e animações suaves.

🌐 **Site no ar:** [https://kessleru.dev](https://kessleru.dev)

## 🎓 Projeto de Aprendizado

Este é um **projeto educacional focado no aprendizado de tecnologias web fundamentais**:

- **HTML**: Estruturação semântica de conteúdo, uso de elementos apropriados
- **CSS**: Estilização avançada, Grid Layout, Flexbox, responsividade e animações
- **JavaScript**: Programação vanilla, manipulação do DOM, eventos e interatividade

## ✨ Funcionalidades

- **Navegação por Abas**: Explore diferentes animais clicando nas imagens
- **FAQ Interativo**: Seção de perguntas frequentes com efeito acordeão
- **Scroll Suave**: Navegação suave entre seções
- **Animações de Scroll**: Elementos aparecem conforme o usuário navega pela página
- **Modal de Login**: Sistema de modal interativo
- **Design Responsivo**: Layout adaptável para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização com Grid Layout e Flexbox
- **JavaScript ES6+**: Interatividade com módulos ES6

### Infraestrutura
- **Docker**: Containerização da aplicação
- **Docker Compose**: Orquestração de serviços
- **Caddy**: Servidor web com HTTPS automático
- **Let's Encrypt**: Certificados SSL gratuitos
- **Azure**: Hospedagem em nuvem (VPS)

## 🚀 Deploy e Hospedagem

O projeto utiliza uma infraestrutura moderna e profissional:

- **Containerização**: Docker para isolamento e portabilidade
- **Proxy Reverso**: Caddy para HTTPS automático e alta performance  
- **SSL/TLS**: Certificados Let's Encrypt renovados automaticamente
- **DNS**: Domínio personalizado com redirecionamento www
- **Cloud**: Azure VPS com Network Security Groups
- **CI/CD**: Deploy via Git pull + Docker rebuild

### Arquitetura
```
Internet → Azure NSG → Caddy (HTTPS) → Python HTTP Server → Static Files
```

## 📖 Conceitos Aprendidos

Este projeto aborda diversos conceitos importantes do desenvolvimento web e DevOps:

### Frontend
- **HTML**: Estruturação semântica com tags apropriadas
- **CSS**: Layout avançado, animações, responsividade
- **JavaScript**: ES6 modules, manipulação DOM, eventos

### DevOps & Infraestrutura
- **Docker**: Containerização de aplicações web
- **Docker Compose**: Orquestração multi-container
- **Reverse Proxy**: Caddy para terminação SSL
- **DNS**: Configuração de registros A e propagação
- **Firewall**: Network Security Groups na Azure
- **HTTPS**: Let's Encrypt e HSTS preloading (.dev)

## 💡 Funcionalidades JavaScript

### Sistema Modular
- **ES6 Modules**: Código organizado em módulos reutilizáveis
- **Import/Export**: Separação clara de responsabilidades

### Navegação por Abas
- Sistema de tabs que permite visualizar informações de diferentes animais
- Ativação visual do animal selecionado com animações

### Acordeão FAQ
- Seção de perguntas frequentes expansível
- Transições suaves ao abrir/fechar perguntas

### Modal Interativo
- Sistema de modal para login
- Eventos de teclado e clique fora para fechar

### Scroll Suave
- Navegação interna suave entre seções
- Links do menu com comportamento scroll smooth

### Animação de Scroll
- Elementos aparecem conforme o scroll da página
- Detecção automática de elementos visíveis

## 🔧 Como Executar

### Desenvolvimento Local
```bash
# Clonar o repositório
git clone https://github.com/kessleru/Animais-Web.git
cd Animais-Web

# Servir com Python (simples)
python -m http.server 8000

# Ou com Docker
docker-compose up -d

# Acessar: http://localhost:8000
```

### Produção
```bash
# No servidor (VPS)
git clone https://github.com/kessleru/Animais-Web.git
cd Animais-Web

# Subir com HTTPS automático
docker-compose up -d

# Acessar: https://kessleru.dev
```

## 📂 Estrutura do Projeto

```
Animais-Web/
├── index.html              # Página principal
├── css/
│   ├── style.css           # Importa outros CSS
│   ├── geral.css           # Estilos gerais
│   └── modal.css           # Estilos do modal
├── js/
│   ├── script.js           # Script principal
│   └── modules/            # Módulos ES6
│       ├── accordion.js    # FAQ acordeão
│       ├── modal.js        # Sistema de modal
│       ├── scroll-animacao.js  # Animações no scroll
│       ├── scroll-suave.js     # Navegação suave
│       └── tabnav.js       # Sistema de abas
├── img/                    # Imagens dos animais
├── Dockerfile              # Configuração Docker
├── docker-compose.yml      # Orquestração
├── Caddyfile              # Configuração Caddy
├── GUIA-VPS.md            # Guia de manutenção
└── README.md              # Este arquivo
```

## 🎨 Design

O projeto utiliza uma paleta de cores natural com fundo bege (`#faf6ed`) e detalhes em amarelo (`#fb5`), criando uma atmosfera acolhedora e natural, perfeita para o tema de animais selvagens.

## 📱 Responsividade

O layout utiliza CSS Grid para criar um design responsivo que se adapta a diferentes tamanhos de tela, mantendo a usabilidade em dispositivos móveis e desktop.

## 🔒 Segurança

- **HTTPS obrigatório**: Domínio .dev com HSTS preloading
- **Certificados SSL**: Renovação automática via Let's Encrypt
- **Headers de segurança**: Configuração via Caddy
- **Firewall**: Network Security Groups na Azure

## 🔧 Performance

- **Compressão**: Gzip/Zstd automático via Caddy
- **Cache**: Headers otimizados para recursos estáticos
- **CDN-ready**: Arquitetura preparada para CDN

## 📄 Licença

Este projeto está sob licença livre. Quase todos os direitos reservados! 😄

---

⭐ **Gostou do projeto? Deixe uma estrela!**  
🌐 **Visite:** [https://kessleru.dev](https://kessleru.dev)
