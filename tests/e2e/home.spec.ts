import { expect, test } from '@playwright/test';

test('home renders and links to demos', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('link', { name: /interactive/i })).toBeVisible();
});

test('counter (Alpine) increments client-side', async ({ page }) => {
  await page.goto('/counter');
  const value = page.getByTestId('counter-value');
  await expect(value).toHaveText('0');
  await page.getByRole('button', { name: /increment/i }).click();
  await page.getByRole('button', { name: /increment/i }).click();
  await expect(value).toHaveText('2');
});

test('HTMX search API returns filtered results', async ({ request }) => {
  // Verify the /api/search endpoint at the HTTP layer. The DOM-level HTMX
  // integration is intentionally not exercised in CI: it depends on the
  // htmx.min.js CDN load + client-side event chain, both of which are flaky
  // when the runner has slow egress. Manual QA covers that path.
  const body = await request.post('/api/search', {
    form: { q: 'mang' },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  expect(body.ok()).toBeTruthy();
  const html = await body.text();
  expect(html.toLowerCase()).toContain('mango');
  expect(html.toLowerCase()).not.toContain('apple');
});

test('interactive page renders the seeded list', async ({ page }) => {
  await page.goto('/interactive');
  // At least one seeded fruit is present before any HTMX call.
  const first = page.locator('#results li').first();
  await expect(first).toBeVisible();
});
