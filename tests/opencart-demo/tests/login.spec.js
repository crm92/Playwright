// @ts-check
import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { NavItems } from '../enums/NavBar';

/*
Test scenario planning

- OpenCart doesn't have a login page when you first navigate to the sight. Flow is home -> 
My Account -> Login. That takes you to the actual login page. 
- Here you have a choice between registering as a new customer or logging in as a returning customer
- We also have a side panel of 13 options (login and register are included)
- Looks like if you're already on the page for logging in, clicking "Login" on that panel doesn't really do much
- You will navigate to the correct page if you're on a different page though

Basic Workflows to start
1. Navigate to website and login
    1a. Negative Tests
        1. Submit empty form → Expect error message for missing email and password
         2. Submit with email only → Expect error for missing password
        3. Submit with password only → Expect error for missing email
        4. Submit with invalid email formats → Expect email format validation error
        5. Submit with passwords containing disallowed characters → Expect validation error
        6. Submit form with as many characters as are allowed and see what happens?
    1b. Positive Test (Happy Path)
        1. Submit valid email and password → Expect redirection to dashboard/homepage
    1c. Forgotten password link - Expect reset flow page loads

*/

test.beforeEach('User Navigates to OpenCart and Page Loads', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');

  //hard assert from toHaveURL confirms successful navigation
  await expect(page).toHaveURL("https://demo.opencart.com/");

  //hard assert that logo has loaded confirms at least some page loading before we start
  await expect(page.locator('title=Your Store')).toBeVisible();
});

//Negative tests
