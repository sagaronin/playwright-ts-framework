import { test, expect } from '../fixture/fixture';
test.describe('Example Test Suite', () => {

    test.use({
        actionTimeout:1200,//Maximum time each action such as `click()` can take
        navigationTimeout: 1200,//Maximum time navigation command can take
    }); 
    // this is like before test annotation in testng
    // this will run before each test in the test suite
    test.beforeEach(async ({ page }) => {
        // Navigate to the page before each test
        await page.goto('https://example.com');
    });
    test('basic test', async ({ page }) => {
        const title = await page.title();
        await page.waitForTimeout(5000); // Wait for 1 second
        expect(title).toBe('Example Domain');
    });
});