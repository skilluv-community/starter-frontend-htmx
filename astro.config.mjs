import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// Node adapter in "standalone" mode is required for the tiny /api routes used
// by the HTMX demo (search-as-you-type, alpine counter can stay client-only).
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: { plugins: [tailwindcss()] },
  server: { host: true, port: 4321 }
});
