```markdown
# 🐂 Pecuária Insights ERP | B2B Landing Page & Lead Generation

Este repositório contém o código-fonte do *touchpoint* digital oficial do **Pecuária Insights ERP**. Mais do que uma página de apresentação institucional, esta aplicação foi arquitetada como um funil de conversão focado em captar e qualificar leads B2B (produtores rurais, confinamentos e consultorias) de forma direta e sem atritos.

🌐 **[Acessar Live Demo - Produto em Produção](https://pecuaria-insights-landing.onrender.com/#demo)**

![Status](https://img.shields.io/badge/Status-Produção-success)
![Frontend](https://img.shields.io/badge/Frontend-Bootstrap%205%20|%20HTML5%20|%20CSS3-blue)
![Integration](https://img.shields.io/badge/Integração-Vanilla%20JS%20|%20WhatsApp%20API-orange)
![Compliance](https://img.shields.io/badge/Compliance-LGPD%20Ready-green)

---

## 🎯 Visão de Produto e Estratégia de Conversão (CRO)

O desenvolvimento desta Landing Page foi guiado por métricas de aquisição e experiência do usuário (UX):

* **Qualificação de Leads B2B:** O formulário de captura não pede apenas os dados de contato, mas exige a categorização da operação (Pecuária de Corte, Confinamento, Multi-Fazenda). Isso entrega um lead já segmentado para o time comercial agir com precisão.
* **Integração Zero-Fricção (WhatsApp CRM):** Em vez de utilizar backends complexos para roteamento de e-mails que caem no spam, o sistema utiliza JavaScript Vanilla para compilar os dados do formulário e injetá-los diretamente em uma API do WhatsApp, garantindo atendimento instantâneo.
* **Conformidade Regulatória (LGPD):** O funil de captação de dados exige o consentimento explícito (Opt-in) do usuário antes do envio de qualquer informação, blindando a operação contra passivos jurídicos de privacidade de dados.

---

## 🚀 Arquitetura e Decisões de Engenharia

A tecnologia foi escolhida para garantir alta performance, carregamento instantâneo e custo zero de infraestrutura de servidores (Serverless):

* **Framework CSS:** `Bootstrap 5`. Escolhido pela robustez na construção de layouts *Mobile-First*. Como o produtor rural acessa majoritariamente via smartphone no campo, a responsividade perfeita é inegociável.
* **Lógica e Integração:** `JavaScript (Vanilla)`. Scripts ultraleves para validação de campos no lado do cliente e roteamento de URLs.
* **Animações e Engajamento Visual:** Biblioteca `AOS (Animate On Scroll)` e vídeos em *autoplay* compactados, mantendo a atenção do usuário sem comprometer o *Load Time* da página.
* **Tipografia e Semântica:** Uso estratégico de *Google Fonts* (Inter e Poppins) para transmitir solidez corporativa e modernidade.

---

## 📁 Estrutura de Diretórios

```text
/landing-page-pecuaria
├── /static
│   ├── /css
│   │   └── style.css       # Estilizações customizadas (Sobrescrita do Bootstrap)
│   ├── /js
│   │   └── script.js       # Lógica de integração e comportamentos de UI
│   ├── /img
│   │   └── storyboard.mp4  # Mídias otimizadas
│   └── /favicon
└── index.html              # Ponto de entrada e estrutura semântica principal

```

---

## ⚙️ Implantação (Deploy)

Por ser uma aplicação baseada em client-side (HTML/CSS/JS), o deploy pode ser realizado em qualquer CDN ou serviço de hospedagem estática (como Vercel, Render, AWS S3 ou GitHub Pages) com alta disponibilidade global e tempo de resposta otimizado.

```
