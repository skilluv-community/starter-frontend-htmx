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

test('HTMX search filters results', async ({ page }) => {
  await page.goto('/interactive');
  // Wait for HTMX to be attached (script is loaded with `defer` in Base.astro).
  await page.waitForFunction(() => 'htmx' in window);

  // Initial server-seeded list is visible.
  const first = page.locator('#results li').first();
  await expect(first).toBeVisible();

  // Type character-by-character so each keystroke fires an `input` event that
  // hx-trigger can debounce against. `page.fill()` sets the value in one shot
  // and can occasionally race the debounce window in CI.
  const input = page.getByPlaceholder(/search/i);
  await input.focus();
  await input.pressSequentially('mang', { delay: 60 });

  // Wait for HTMX to swap the results, then assert on the filtered content.
  await page.waitForResponse((r) => r.url().endsWith('/api/search') && r.status() === 200);
  await expect(first).toHaveText(/mango/i);
});
