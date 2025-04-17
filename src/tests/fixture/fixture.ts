import { test as baseTest, expect, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

type CustomFixtures = {
  page: Page;
};

const test = baseTest.extend<CustomFixtures>({
  page: async ({ browser }, use) => {
    const browserName = process.env.BROWSER || 'chromium'; // Default to 'chromium'
    if (browser.browserType().name() !== browserName) {
      throw new Error(`Browser mismatch: expected ${browserName}, but got ${browser.browserType().name()}`);
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

test.beforeEach(async ({ page }, testInfo) => {
  if (!testInfo.project.use.headless) {
    await page.context().tracing.start({ screenshots: true, snapshots: true });
  }
});

test.afterEach(async ({ page }, testInfo) => {
  if (!testInfo.project.use.headless) {
    await page.context().tracing.stop({ path: `trace-${testInfo.title.replace(/\s+/g, '_')}.zip` });
  }
});

export { test, expect };