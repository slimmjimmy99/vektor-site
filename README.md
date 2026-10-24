# vektorgis.com

Site da Vektor · Geoanalytics. Astro, estático, sem cookies, sem analítica e sem pedidos a terceiros.

- `npm install` e depois `npm run dev`: abre em http://localhost:4321
- `npm run build` gera a pasta `dist/`
- `npm run verificar` falha se houver "A PREENCHER", scripts ou pedidos a terceiros. Correr antes de publicar.

Cabeçalhos de segurança: `public/_headers`. Fontes alojadas no próprio site: `public/fonts/`.

## Publicar na Cloudflare (Pages)
1. Workers & Pages → Create → Pages → Connect to Git → escolher este repositório.
2. Framework preset: Astro. Build command: `npm run build && npm run verificar`. Output: `dist`.
3. Variável de ambiente `NODE_VERSION` = `22`.
4. Depois do primeiro deploy: Custom domains → `vektorgis.com` (e `www`, com redirecionamento).
