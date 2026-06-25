# AgroNexus.Life

Site institucional da **AgroNexus.Life** — soluções inteligentes de biotecnologia e
logística para cadeias de suprimentos animal e vegetal.

Construído com **React 18 + Vite**, CSS moderno e responsivo, componentes reutilizáveis
e formulário de contato com validação, pronto para integração com API/serviço de e-mail.

---

## ✅ Pré-requisitos

- **Node.js 18+** (recomendado 20+) — verifique com `node -v`
- **npm** (vem com o Node)

---

## 🚀 Como rodar o projeto localmente

Abra a pasta no VS Code e, no terminal integrado, execute:

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev
```

O Vite abrirá automaticamente em **http://localhost:5173**.

### Outros comandos

```bash
npm run build     # Gera a versão de produção na pasta /dist
npm run preview   # Pré-visualiza a build de produção localmente
```

---

## 📁 Estrutura do projeto

```
agronexus-life/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.png
└── src/
    ├── main.jsx                 # Ponto de entrada
    ├── App.jsx                  # Monta Navbar + Home + Footer
    ├── assets/
    │   ├── icons/               # Ícones (.png) + index.js
    │   └── images/              # Logo e imagem hero
    ├── components/              # Componentes reutilizáveis
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Mission.jsx
    │   ├── ServiceCard.jsx
    │   ├── Portfolio.jsx
    │   ├── Dashboard.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── Reveal.jsx           # Wrapper de animação no scroll
    ├── hooks/
    │   └── useScrollReveal.js
    ├── pages/
    │   └── Home.jsx
    ├── services/
    │   └── contactService.js    # Ponto de integração do formulário
    └── styles/                  # Um CSS por componente + index.css global
```

---

## ✉️ Integrando o formulário de contato

Toda a lógica de envio está isolada em **`src/services/contactService.js`**.
Atualmente ela apenas simula o envio. Para conectar a um backend ou serviço de e-mail
(EmailJS, Resend, SendGrid, Formspree, endpoint próprio…), basta substituir o corpo da
função `sendContactMessage`. O exemplo de integração com `fetch` já está comentado no arquivo.

Sugestão: guarde a URL do endpoint em um `.env`:

```
VITE_CONTACT_ENDPOINT=https://seu-endpoint.com/contato
```

e acesse com `import.meta.env.VITE_CONTACT_ENDPOINT`.

---

## 🎨 Personalização

As cores, fontes e medidas ficam centralizadas em **`src/styles/index.css`**
(bloco `:root`). Alterando os tokens lá, todo o site se ajusta.

---

© 2026 AgroNexus.Life — Onde a biologia encontra a logística.
