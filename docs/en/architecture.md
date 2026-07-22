# Architecture — starter-frontend-htmx

## Opinionated choices

### 1. HTMX-first

We treat HTML as the interface. Server responses are HTML fragments; the browser stays as dumb as possible. This scales down beautifully for small teams and unfamiliar codebases.

### 2. Alpine.js for pure-client interactivity

When state truly lives only in the browser (a counter, a toggle, a menu), Alpine's directives are the smallest useful tool. No build step, no client-side router.

### 3. Astro 5 as the server framework

- File-based routing.
- Component islands if you ever need them (React, Svelte, Vue components in the same repo).
- Node adapter for straightforward self-hosting.

### 4. Tailwind v4

CSS-first pipeline via `@tailwindcss/vite`. Add utility classes to templates without a `tailwind.config.js`.

### 5. HTMX and Alpine loaded from a CDN

For the starter, we load HTMX 2 and Alpine 3 from unpkg. This makes the demo self-contained. For production, install the packages as dependencies and self-host the scripts.

## What's out of scope

- Auth — add Astro middleware + session cookies.
- Database — this starter is intentionally stateless; combine with `starter-fullstack-node`, `starter-fullstack-python`, or a lightweight SQLite setup.
- WebSocket / SSE for real-time — HTMX supports `hx-ext="sse"`, add it when needed.
