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

test('HTMX search API returns filtered results', async ({ page }) => {
  // Verify the /api/search endpoint by fetching from inside the page context,
  // so Astro 5's cross-site POST protection sees a same-origin request. The
  // DOM-level HTMX event chain is not exercised here — that depends on the
  // htmx.min.js CDN load and is covered manually. The API is what matters
  // for the starter's behaviour.
  await page.goto('/interactive');
  const result = await page.evaluate(async () => {
    const r = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ q: 'mang' }).toString()
    });
    return { status: r.status, html: (await r.text()).toLowerCase() };
  });
  expect(result.status).toBe(200);
  expect(result.html).toContain('mango');
  expect(result.html).not.toContain('apple');
});

test('interactive page renders the seeded list', async ({ page }) => {
  await page.goto('/interactive');
  const first = page.locator('#results li').first();
  await expect(first).toBeVisible();
});
