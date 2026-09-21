# NAVIS · Comunidade dos Navegantes

![React](https://img.shields.io/badge/React_19-1f2937?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_(rolldown)-1f2937?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-1f2937?style=flat-square&logo=javascript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-1f2937?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1f2937?style=flat-square&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-Em_desenvolvimento-d29922?style=flat-square)

Página da comunidade da **NAVIS**, plataforma de geolocalização e segurança que ajuda as pessoas a traçar rotas mais rápidas e seguras.

## Problema e solução

Uma plataforma de rotas seguras depende da participação dos próprios usuários. Esta página cria o espaço de comunidade da NAVIS: apresenta o propósito do projeto, oferece um feed em que os "navegantes" publicam, curtem e comentam, e exibe conquistas (Explorador, Colaborador, Mentor) que incentivam o engajamento.

## Meu papel

Atuei no **marketing e no front-end** da NAVIS. Neste repositório, desenvolvi a página da comunidade: primeiro como protótipo em HTML/CSS/JS puro (`pag_NAVIS/`) e depois migrada para componentes React.

## Decisões de engenharia

- **Migração de HTML estático para React.** A versão original (`pag_NAVIS/corpo.html` + `bot.js`) foi reescrita em componentes: `Header`, `Feed` e `CommentsModal`, compostos em `App.jsx`.
- **Estado local com hooks.** O `Feed` controla posts, filtro e modal com `useState`. A ordenação por "recentes" ou "mais curtidos" é derivada com `useMemo`, sem duplicar estado.
- **Persistência no navegador.** Os posts são salvos e restaurados do `localStorage` (chave `navisPosts`) via `useEffect`, o que permite testar a experiência sem back-end.
- **Comentários em modal.** O `CommentsModal` recebe o post selecionado por props e devolve os novos comentários ao `Feed`.
- **Build com rolldown-vite.** O `package.json` fixa `vite` em `rolldown-vite@7.1.14` via `overrides`.

## Demonstração

![Feed da comunidade com filtro e comentários](docs/assets/navis-feed.gif)

## Como executar

**Pré-requisitos:** Node.js 20+ e npm.

```bash
git clone https://github.com/PlataformaNavis/pag_navegantes.git
cd pag_navegantes
npm install
npm run dev
```

> ⚠️ **Limitação conhecida:** o `index.html` referencia `/src/main.jsx`, mas os componentes estão na raiz do repositório e o `Header.jsx` importa a logo de `./assets/`, pasta que não existe (a imagem está só em `pag_NAVIS/`). Por isso `npm run dev` e `npm run build` falham hoje com `Failed to resolve /src/main.jsx`. A correção é mover os arquivos `.jsx`/`.css` para `src/` e copiar a logo para `src/assets/`.

**Versão estática (funciona sem instalação):** abra `pag_NAVIS/corpo.html` no navegador.

**Testes:** o projeto não possui testes automatizados.

## Estrutura de pastas

```
.
├── index.html            # entrada do Vite
├── main.jsx              # bootstrap do React
├── App.jsx               # compõe Header, Feed e seções da página
├── Header.jsx
├── Feed.jsx              # posts, filtro e persistência em localStorage
├── CommentsModal.jsx
├── *.css
├── pag_NAVIS/            # protótipo original em HTML/CSS/JS
└── .github/workflows/    # workflow de publicação em GitHub Packages
```
