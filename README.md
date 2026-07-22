# starter-frontend-htmx

> A Skilluv starter — Astro 5 + HTMX 2 + Alpine 3 + Tailwind v4.

[![CI](https://github.com/skilluv-community/starter-frontend-htmx/actions/workflows/ci.yml/badge.svg)](https://github.com/skilluv-community/starter-frontend-htmx/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Skilluv](https://img.shields.io/badge/skilluv-community-emerald)](https://skilluv.io)

## English

### What this is

An HTMX-first, server-rendered starter. Minimal JavaScript. Small islands of Alpine.js when you need
purely client interactivity. Astro handles routing, layouts, and the tiny API endpoints HTMX calls.

- **Astro 5** with `output: 'server'` + Node adapter
- **HTMX 2** for hypermedia interactions
- **Alpine 3** for isolated client-side state
- **Tailwind v4** via the Vite plugin
- **Playwright** end-to-end tests

### Quickstart

```bash
git clone git@github.com:skilluv-community/starter-frontend-htmx.git
cd starter-frontend-htmx
cp .env.example .env
npm install
npm run dev
```

Open <http://localhost:4321>.

### Structure

```
src/
  layouts/Base.astro          Shared layout, HTMX + Alpine <script>
  pages/
    index.astro               Home
    interactive.astro         HTMX search-as-you-type
    counter.astro             Alpine counter
    api/search.ts             Astro endpoint returning HTML fragments
  styles.css                  @import "tailwindcss"
tests/e2e                     Playwright
```

### Docs

- [`docs/en/getting-started.md`](./docs/en/getting-started.md)
- [`docs/en/architecture.md`](./docs/en/architecture.md)

---

## Français

Starter HTMX-first, server-rendered. Voir [`docs/fr/getting-started.md`](./docs/fr/getting-started.md).

```bash
git clone git@github.com:skilluv-community/starter-frontend-htmx.git
cd starter-frontend-htmx
cp .env.example .env
npm install
npm run dev
```

---

## License

MIT — see [LICENSE](./LICENSE).
