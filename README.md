# 🦊 Animais Fantásticos

**Site interativo sobre animais selvagens** com componentes modernos, animações suaves e integração com APIs.

[![Demo](https://img.shields.io/badge/🌐-Ver_Site-181717)](kessleru.github.io/Animais-Web/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Sobre o Projeto

Site educacional sobre animais selvagens desenvolvido com **HTML5, CSS3 e JavaScript ES6+ vanilla**. O projeto demonstra a implementação de componentes UI modernos (tabs, accordion, modal, dropdown) sem uso de frameworks, utilizando apenas tecnologias web fundamentais com foco em boas práticas e código modular.

### 🎯 Seções

- **Animais**: Navegação por abas com informações sobre diferentes espécies
- **FAQ**: Perguntas frequentes com accordion interativo
- **Números**: Estatísticas animadas carregadas dinamicamente via API
- **Contato**: Informações, mapa e cotação de Bitcoin em tempo real

---

## ✨ Funcionalidades

### 🎨 Interface
- Design responsivo mobile-first
- Animações suaves de entrada ao scroll
- Menu mobile com hamburguer
- Navegação por abas (tab navigation)
- Modal de login interativo
- Tooltips informativos
- Dropdown menu com submenu

### ⚙️ JavaScript
- **Arquitetura Modular**: ES6 Modules para organização e manutenibilidade
  - `scroll-suave.js` - Navegação suave entre seções
  - `scroll-animacao.js` - Animações ativadas ao scroll
  - `accordion.js` - FAQ com efeito acordeão
  - `tabnav.js` - Sistema de navegação por abas
  - `modal.js` - Modal de login com overlay
  - `tooltip.js` - Tooltips informativos
  - `dropdown-menu.js` - Menu dropdown interativo
  - `menu-mobile.js` - Menu responsivo para mobile
  - `funcionamento.js` - Status de funcionamento por horário
  - `fetch-animais.js` - Carregamento de dados de animais
  - `fetch-bitcoin.js` - Cotação do Bitcoin em tempo real
  - `anima-numeros.js` - Contador animado de estatísticas
  - `outsideclick.js` - Detecção de cliques externos

### 🔌 Integração com APIs
- **Fetch API** para carregar dados de animais (JSON local)
- **Mutation Observer** para observar mudanças no DOM
- **API de Cotação Bitcoin** para exibir preço em tempo real

### ♿ Acessibilidade
- Estrutura HTML semântica
- ARIA attributes nos componentes interativos
- Navegação por teclado funcional
- Labels apropriados em elementos interativos

---

## ⚡ Performance

### 📦 CSS
- **Arquitetura modular**: 7 arquivos CSS organizados por componente
- **CSS Grid e Flexbox** para layouts responsivos
- **Transitions suaves** para melhor UX

### 🎯 JavaScript
- **ES6 Modules** para carregamento otimizado
- **Event delegation** para melhor performance
- **Lazy execution** - módulos só executam quando necessário
- **Listeners diretos de scroll** para disparar animações assim que o usuário rola a página

---

## 🛠️ Tecnologias

- **HTML5**: Semântico e acessível
- **CSS3**: Grid, Flexbox, Transitions
- **JavaScript ES6+**:
  - Vanilla JS sem frameworks
  - ES6 Modules (`import`/`export`) para código modular
  - Fetch API para requisições assíncronas
  - Mutation Observer para observar mudanças no DOM
  - Classes e métodos modernos
- **Git**: Controle de versão com commits semânticos

---

## 📱 Responsividade

**Breakpoints**
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

**Técnicas**
- Mobile-first approach
- CSS Grid responsivo
- Menu mobile com toggle
- Imagens adaptativas

---

## 📚 Aprendizados

Este projeto demonstra:
- **Arquitetura JavaScript modular** com ES6 Modules
- JavaScript vanilla para componentes complexos (sem jQuery ou frameworks)
- Manipulação avançada do DOM
- Event handling e delegation
- Fetch API e consumo de dados JSON
- CSS modular e organizado por componente
- Mutation Observer para observar mudanças no DOM
- Design patterns (Module Pattern, Observer)
- Boas práticas de acessibilidade
- Git workflow com commits semânticos

---

<div align="center">

⭐ **Desenvolvido como projeto educacional em JavaScript vanilla**

[![GitHub](https://img.shields.io/badge/GitHub-kessleru-181717?logo=github)](https://github.com/kessleru)
</div>
