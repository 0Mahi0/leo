
//BEFORE EACH, BEFORE ALL, AFTER EACH, AFTER ALL
//hooks mostly used in browser lauching, login.logout, print products, close browser, etc like scenarios.
//1 scenario browse login add to cart, checkout, logout. So we can use before each to launch browser and login, 
// after each to logout and close browser. So that we can save time and avoid code duplication.


import { test, expect } from "@playwright/test"

test("Handle Hooks", async ({ page }) => {

    //browser launch
    await page.goto("https://demoblaze.com/index.html")

    //Title
    await expect(page).toHaveTitle("STORE")

    //Click on Login text
    await expect (page.locator("#login2")).toBeVisible()
    await page.click("#login2")

    //Enter username and password
    await page.fill("#loginusername", "Mahii")
    //await page.fill("#loginpassword").fill("Mahi@123")
    await page.fill("#loginpassword", "Mahi@123")

    //login button
    await expect(page.locator('button:has-text("Log in")')).toBeVisible()
    await page.click('button:has-text("Log in")')

    //dashboard
    await page.locator("#nameofuser").waitFor(state : "visible")
    await expect(page.locator("#nameofuser")).toHaveText("Welcome Mahiiiiiii")
    

    //# 1 print products
    await page.locator("[class='hrefch']").waitFor(state : "visible")
    
    const products = await page.$$("[class='hrefch']")
    console.log(products)

    for (const element of products){





})