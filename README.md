# Playwright Project

This project is a sample setup for using Playwright to perform end-to-end testing. It includes a basic test case and configuration files necessary for running Playwright tests.

## Project Structure

```
playwright-project
├── src/tests
│   ├── example.spec.ts       # Sample test case
├── playwright.config.ts       # Playwright configuration
├── package.json               # NPM dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd playwright-project
   ```

2. **Install playwright:**
   2.1. Install Playwright
   Run the following command in your Visual Studio Code terminal to install Playwright and its test runner:
   ```bash
   npm install -D @playwright/test
   ```

   The -D flag ensures it is added as a development dependency.

   2.2 Initialize Playwright
   Run the Playwright initialization command to set up the necessary files and configurations:
   ```bash
   npx playwright install
   ```

   This will download the required browser binaries and create a basic configuration file (playwright.config.ts).

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the tests:**
   ```bash
   npx playwright test
   ```

## Usage Examples

- The sample test case can be found in `tests/example.spec.ts`. You can modify this file to add your own test scenarios.

## Configuration

- The Playwright configuration is located in `playwright.config.ts`. You can adjust the settings such as timeouts and browser options as needed.

## Additional Information

For more details on Playwright, visit the [Playwright documentation](https://playwright.dev/docs/intro).