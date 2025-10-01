import { expect } from '@playwright/test';


class loginPage
{
    static AccountOptionsText = Object.freeze({
        LOGIN: "Login",
        REGISTER: "Register",
        FORGOTTEN_PW: "Forgotten Password",
        MY_ACCOUNT: "My Account",
        ADDRESS_BOOK: "Address Book",
        WISH_LIST: "Wish List", 
        ORDER_HISTORY: "Order History",
        DOWNLOADS: "Downloads",
        SUBSCRIPTIONS: "Downloads",
        REWARD_POINTS: "Reward Points",
        RETURNS: "Returns",
        TRANSACTIONS: "Transactions",
        NEWSLETTER: "Newsletter"
    });

    constructor(page)
    {
        //Whatever page we get from the test case is assigned here
        this.page=page;

        //Continue btn inside New Customer square on left side of page
        this.registerAcctContinueBtn = page.locator(xpath="//h2[contains(text(), 'New Customer')]/parent::div//div//a[contains(text(), 'Continue')]");

        //Returning Customer Square
        this.emailAddrBar = page.locator(id='input-email');
        this.passwordBar = page.locator(id='input-password');
        this.returningforgottenPW = page.locator(xpath="//h2[contains(text(), 'Returning Customer')]/parent::form//div//a[contains(text(), 'Forgotten Password')]");
        this.returningLogin = page.locator(xpath="//button[contains(text(), 'Login')]");

        this.accountOption = (optionText) =>
            page.locator(`//aside[@id='column-right']/div/a[contains(text(), '${optionText}')]`)

    }

    async clickAccountOption(optionText) 
    {
        await this.accountOption(optionText).click();
    }
}