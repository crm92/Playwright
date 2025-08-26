//require is a nodeJS fxn used to include modules present in external/separate files
const {test, expect} = require('@playwright/test') //Grab only the test and expect modules

//Keyword 'async' before a fxn makes fxn return a promise
//The 'await' keyword before a fxn makes the function wait for a promise
//If we don't add these, the test won't wait for the page to load before moving
    //to the second step. 
test('My first test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})