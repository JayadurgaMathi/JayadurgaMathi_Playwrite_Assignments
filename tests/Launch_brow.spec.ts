import {test,expect} from '@playwright/test';// importing chromium, test Playwright Test library:

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon/);
});