

import { test, expect } from "@playwright/test"

test("viewPort screenshot", async ({ page }) => {
   
   //browser launch
    await page.goto("https://www.amazon.in/")

    //wait for 5 seconds
    await page.waitForTimeout(5000)

    //screenshot
    await page.screenshot({ path : "images/" + "ViewPort_Screenshot.png" })

})

test("fullPage screenshot", async ({ page }) => {
   
    //browser launch
     await page.goto("https://www.amazon.in/")          

    //wait for 5 seconds    
    await page.waitForTimeout(5000)

    //screenshot
    await page.screenshot({ path : "images/" + "fullPage_screenshot.png" , fullPage : true  })

})

test.only("locator screenshot", async ({ page }) => {
    //browser launch
     await page.goto("https://www.amazon.in/")  

     //wait for 5 seconds
     await page.waitForTimeout(5000)    

    //locator screenshot
    await page.locator("//span[@class='nav-cart-icon nav-sprite']")
    .screenshot({ path : "images/" + "locator_screenshot.jpeg" })
})
