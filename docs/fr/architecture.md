# Architecture — starter-frontend-htmx

## Choix opinionated

### 1. HTMX-first

HTML comme interface. Le serveur renvoie des fragments HTML. Le navigateur reste au plus simple. Scale-down parfait pour petites équipes.

### 2. Alpine.js pour l'interactivité pure client

Quand l'état vit vraiment dans le navigateur (compteur, toggle, menu), Alpine est le plus petit outil utile. Zéro build, zéro router client.

### 3. Astro 5 comme framework serveur

- Routing par fichiers.
- Component islands si besoin (React, Svelte, Vue).
- Adapter Node pour self-host.

### 4. Tailwind v4

Pipeline CSS-first via `@tailwindcss/vite`. Classes utilitaires directement dans les templates, pas de `tailwind.config.js`.

### 5. HTMX + Alpine via CDN

Pour le starter, chargement depuis unpkg. En prod, installer les paquets et self-host les scripts.

## Hors scope

- Auth — middleware Astro + cookies session.
- DB — starter stateless volontairement ; combiner avec `starter-fullstack-node`/`python`.
- WebSocket / SSE — HTMX supporte `hx-ext="sse"`.
