import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run build && node ./dist/server/entry.mjs',
    port: 4321,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  },
  testDir: 'tests/e2e',
  use: { baseURL: 'http://localhost:4321' }
});
