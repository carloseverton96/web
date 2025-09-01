# web

passo a passo para criar uma aplicação Vite + React (puro, sem TypeScript) com uma página e um navbar, e publicá-la no Netlify. Vou incluir todos os comandos, o código dos arquivos principais e as opções de deploy (GUI e CLI). Vou supor que você usa npm; os comandos com yarn/pnpm são análogos.

Observação rápida: o build do Vite gera a pasta dist por padrão e o Netlify recomenda usar npm run build + dist como diretório de publicação. 
vitejs
Netlify Docs

1) Pré-requisitos

Node.js (versão LTS) + npm instalados.

Git (para deploy via repositório).

Conta no Netlify (grátis basta se cadastrar).

2) Criar o projeto com Vite

Abra o terminal e rode:

# cria a pasta 'web' com template React (Vite)
npm create vite@latest web -- --template react

cd web
npm install


O template já cria package.json com scripts típicos: dev, build (vite build) e preview. Para rodar localmente:

npm run dev        # ambiente de desenvolvimento (hot reload)
npm run build      # gera /dist para produção
npm run preview    # testa o build localmente


(Documento oficial do Vite explica o fluxo create → dev → build e que o build padrão vai para dist.) 
vitejs
+1

3) Estruturação simples (uma página + Navbar)

Substitua/adicione os arquivos abaixo em src/.

src/main.jsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


src/App.jsx

import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <h1>Doutrina Espírita</h1>
        <section id="sobre">
          <h2>Sobre</h2>
          <p>
            A Doutrina Espírita, codificada por Allan Kardec, estuda a natureza,
            origem e destino dos espíritos, bem como suas relações com o mundo corporal.
          </p>
        </section>

        <section id="principios">
          <h2>Princípios</h2>
          <ul>
            <li>Reencarnação</li>
            <li>Lei de causa e efeito</li>
            <li>Comunicabilidade dos Espíritos</li>
          </ul>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Endereço da casa espírita / e-mail / telefone</p>
        </section>
      </main>
    </div>
  );
}


src/components/Navbar.jsx

import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Doutrina Espírita</div>
      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#principios">Princípios</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}


src/index.css (exemplo simples, responsivo)

:root{
  --bg: #f8fafb;
  --nav: #1f2937;
  --accent: #0ea5a4;
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,system-ui,Arial,sans-serif;background:var(--bg);color:#111}
.navbar{
  display:flex;align-items:center;justify-content:space-between;
  padding:1rem 1.5rem;background:var(--nav);color:#fff;
}
.brand{font-weight:700}
.nav-links{list-style:none;display:flex;gap:1rem}
.nav-links a{color:#fff;text-decoration:none;font-weight:500}
.container{max-width:900px;margin:2rem auto;padding:0 1rem}
h1{margin-bottom:.75rem}
section{margin-top:1.25rem;padding:1rem;background:#fff;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.05)}
@media(max-width:640px){
  .nav-links{display:none}
}


Esse código cria uma única página com um navbar simples — você pode adaptar estilo e conteúdo facilmente.

4) Testar e gerar o build

No terminal (dentro de web):

npm run dev    # ver em http://localhost:5173
# quando pronto para produção:
npm run build  # gera a pasta `dist`
npm run preview # testa o conteúdo de dist localmente


(O Vite gera dist por padrão; use esse dist para publicar no Netlify.) 
vitejs

5) Subir para um repositório (Git + GitHub)

Exemplo rápido:

git init
git add .
git commit -m "Inicial: site Doutrina Espírita com Vite+React"
# crie um repositório no GitHub e então:
git remote add origin git@github.com:SEU_USUARIO/seu-repo.git
git branch -M main
git push -u origin main

6) Publicar no Netlify — opções (escolha 1)
Opção A — Deploy automático a partir do Git (recomendado)

No Netlify → New site → Import from Git → conecte sua conta GitHub/GitLab/Bitbucket.

Escolha o repositório e a branch (ex.: main).

Configure:

Build command: npm run build

Publish directory: dist

Clique em Deploy site.

Netlify tenta detectar Vite automaticamente e sugere esses valores; você pode confirmá-los ou sobrescrevê-los. 
Netlify Docs
+1

Opção B — Upload manual (Netlify Drop)

Depois de npm run build, compacte a pasta dist e arraste no Netlify Drop (site web) para publicar rapidamente. (útil para protótipos)

Opção C — Usando Netlify CLI (pela linha de comando)

Instale e faça login:

npm install -g netlify-cli
netlify login
# inicializar/configurar projeto (opcional):
netlify init
# deploy direto da pasta dist (prod):
netlify deploy --dir=dist --prod


O netlify deploy cria um deploy (use --prod para publicar diretamente no site ao vivo). 
Netlify Docs
Netlify CLI command reference

7) SPA / rotas e redirects

Se futuramente você tiver rotas cliente (react-router), adicione um arquivo _redirects na sua pasta public (para ser copiado ao dist) ou configure no netlify.toml:

public/_redirects

/*    /index.html   200


ou netlify.toml na raiz:

[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200


Coloque o _redirects na raiz do diretório de publicação (dist) — se as regras forem erradas/fora do lugar, você pode ter problemas de MIME/404 (ex.: servir index.html para arquivos estáticos). Se ver problemas, confira a posição do _redirects e regras. 
Netlify Docs
Netlify Support Forums

8) Erros comuns e solução rápida

Build falha / Netlify acusa "Deploy directory 'dist' does not exist" → verifique se o comando de build está correto (npm run build) e se o script build existe no package.json. Também confirme branch e base directory. 
Netlify Support Forums
Netlify Docs

Arquivos estáticos retornam HTML (index.html) → provavelmente regra de redirect está capturando arquivos estáticos; verifique _redirects/netlify.toml e se o arquivo está no diretório de publicação. 
Netlify Support Forums

9) Arquivo netlify.toml mínimo recomendado

Coloque na raiz do repositório (opcional, mas útil para CI):

[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200


(O Netlify processa netlify.toml no build/deploy.) 
Netlify Docs
+1

10) Checklist final antes do deploy

npm run build gera dist sem erros.

package.json tem o script "build": "vite build".

Repositório (main) push no GitHub.

No Netlify, Build command = npm run build, Publish = dist (ou use netlify deploy).

Se usar rotas cliente, inclua _redirects ou netlify.toml.