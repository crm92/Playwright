import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

//So Playwright is nice because I don't have to explicitly tell every command
//to wait for something to be visible and clickable, but it looks like 
//Codegen doesn't add any asserts/expects. I would need to add anything like that
//after the fact. 