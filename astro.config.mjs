import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// Node adapter in "standalone" mode is required for the tiny /api routes used
// by the HTMX demo (search-as-you-type, alpine counter can stay client-only).
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: { plugins: [tailwindcss()] },
  server: { host: true, port: 4321 },
  // Astro 5 enables cross-site POST protection by default. For this teaching
  // starter we turn it off: the HTMX demo posts to /api/search from the same
  // origin, and the origin-header comparison is fragile behind proxies or in
  // headless test runners. Re-enable `security.checkOrigin: true` before
  // deploying behind a stable origin.
  security: { checkOrigin: false }
});
