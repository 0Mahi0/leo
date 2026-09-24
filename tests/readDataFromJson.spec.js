
import{ test, expect } from "@playwright/test"

import {data1} from "test data/testData1.json"

test("Reading data from JSON file", async () => {

    //browser launch
    await page.goto("https://demoblaze.com/")

    //click on login button
    await page.locator("text=Log in").click()

    //username 
    await page.locator("#loginusername").fill(data1[0].validUser)
    
    //password
    await page.locator("#loginpassword").fill(data1[0].validPassword)

    //login button
    await page.locator("button:has-text('Log in')").click()
    await page.waitForTimeout(3000)



})