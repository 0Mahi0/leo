
import { test, expect } from "@playwright/test"

let page

test.beforeEach(async ({ page }) => {

    const context = await browser.newContext()
    page = await context.newPage()

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

})

test.afterEach(async ({ page }) => {

    let id = 0
    //screenshot    
    await page.screenshot({ path :"images/screenshot"++id".png" })
    
})

test.afterAll(async ({ browser }) => {      

})