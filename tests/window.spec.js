

import { test, expect , chromium, firefox, webkit } from "@playwright/test"
import { channel } from "node:diagnostics_channel"
import { TIMEOUT } from "node:dns"

test("handling 2 tabs", async () => {
    const browser =await chromium.launch({channel : "msedge", slowMo : 1000})

    const context = await browser.newContext({permissions : []}) //window open
    const page = await context.newPage() //tab open

    const page1 = await context.newPage() //tab1 open

    await page.goto("https://demoblaze.com/")
    await page1.locator('[id="login2"]').click()
    await page1.locator('[id="loginusername"]').fill("Mahii")
    await page1.locator('[id="loginpassword"]').fill("Mahi@123")
    await page1.locator('button:has-text("Log in")').click()    

    const page2 = await context.newPage() //tab2 open
    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page2.locator('[name="username"]').fill("Admin")
    await page2.locator('[name="password"]').fill("admin123")
    await page2.locator('button:has-text("Login")').click()// doubt here in code

})


test("handling 2 windows", async () => {

    const context = await browser.newContext() //window open
    const page = await context.newPage() //tab open     

    //browser launch
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //promise to handle new window
    const[newPage] = await Promise.all([
        context.waitForEvent("page"), //wait for new page to open
        page.click("text=OrangeHRM, Inc") //click on link which opens new window
    ])

    await newPage.locator('text=Allow all').click() //handle cookie pop up
    await newPage.locator('name="EmailHomePage"').fill("test@example.com") //fill email address
    await newPage.locator('[name="action_request"]').first().click() //click on subscribe button
    
    await newPage.bringToFront() //bring new window to front
    await newPage.goback() //navigate back to previous page
    await newPage.reload() //reload the page

    await newPage.waitfortimeout(5000) //wait for 5 seconds

    await page.getByplaceholder("Username").fill("Admin") //fill username in first page
    await page.getByplaceholder("Password").fill("admin123") //fill password in first page
    await page.getByRole("button", { name: "Login" }).click() //click on login button in first page








})

