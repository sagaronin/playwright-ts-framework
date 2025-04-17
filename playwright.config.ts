import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  //This is the default test timeout for each test
  //If you want to set a global timeout for each test, you can do it here
  // this can be overriden at test level, inside test spec file.
  timeout: 30000,
  //timeout for verification steps which includes something like this expect(1).toEqual(1)
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'never' }], ['playwright-ctrf-json-reporter', {}]],
  use: {
    headless: false,
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [{
    name: 'chromium',
    use: {
      browserName: 'chromium',
      launchOptions: {
        slowMo: 50,
      },
    },
  },
  {
    name: 'firefox',
    use: {
      browserName: 'firefox',
    },
  },
  {
    name: 'webkit',
    use: {
      browserName: 'webkit',
    },
  }],
});