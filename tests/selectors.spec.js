import {test, expect} from '@playwright/test'

test('Selectors Demo', async({page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.click('id=user-name');
    //In Playwright we use the locator class
    await page.locator('id=user-name').fill('user');
    //If I repeat the above command w/ different input, it will overwrite, not add
    await page.locator('id=user-name').fill("name");

    //Using CSS selectors instead
    await page.locator('#login-button').click();

});