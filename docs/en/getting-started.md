# Getting started — starter-frontend-htmx

## Prerequisites

- Node 22 or 24 (LTS)
- npm 10+

## First run

```bash
git clone git@github.com:skilluv-community/starter-frontend-htmx.git
cd starter-frontend-htmx
cp .env.example .env
npm install
npm run dev
```

Astro dev server at <http://localhost:4321>.

## Scripts

| Command            | Purpose                                |
| ------------------ | -------------------------------------- |
| `npm run dev`      | Astro dev with HMR                     |
| `npm run build`    | Production build (`dist/`)             |
| `npm run preview`  | Serve the built site                   |
| `npm run check`    | `astro check` (type-check + templates) |
| `npm run lint`     | ESLint + Prettier                      |
| `npm run test:e2e` | Playwright                             |

## Deploying

The Node adapter produces `dist/server/entry.mjs`. Run it behind any reverse proxy (Caddy, nginx). Coolify handles this natively.

For static-only deployment, swap `@astrojs/node` for `@astrojs/vercel`, `@astrojs/cloudflare`, or use `output: 'static'` and drop the API route.
