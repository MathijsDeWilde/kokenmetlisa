import { expect, test } from '@playwright/test';

test('home page has expected to have a main element', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('main')).toBeVisible();
});
