# Démarrage — starter-frontend-htmx

## Prérequis

- Node 22 ou 24 (LTS)
- npm 10+

## Premier lancement

```bash
git clone git@github.com:skilluv-community/starter-frontend-htmx.git
cd starter-frontend-htmx
cp .env.example .env
npm install
npm run dev
```

Astro dev server sur <http://localhost:4321>.

## Scripts

| Commande           | Rôle                    |
| ------------------ | ----------------------- |
| `npm run dev`      | Astro dev + HMR         |
| `npm run build`    | Build de prod (`dist/`) |
| `npm run preview`  | Sert le build           |
| `npm run check`    | `astro check`           |
| `npm run lint`     | ESLint + Prettier       |
| `npm run test:e2e` | Playwright              |

## Déploiement

L'adapter Node produit `dist/server/entry.mjs` à lancer derrière un reverse proxy (Caddy, nginx). Coolify gère nativement. Pour du statique-only, remplacer `@astrojs/node` par un adapter statique et supprimer la route API.
