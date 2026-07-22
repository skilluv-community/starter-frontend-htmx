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
  // Wait for initial `hx-trigger="load"` to populate the list.
  await expect(page.locator('#results li').first()).toBeVisible();
  await page.getByPlaceholder(/search/i).fill('mang');
  await expect(page.locator('#results li').first()).toHaveText(/mango/i);
});
