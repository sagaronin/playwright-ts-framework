import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    await page.waitForTimeout(5000); // Wait for 1 second
    expect(title).toBe('Example Domain');
});