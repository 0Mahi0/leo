
const{sauceData} = require('test data/testData1.json')

import { test, expect } from "@playwright/test"

import LoginPage from "../pages/LoginPage"

test("handling sauce demo login", async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.gottoBrowser()
    await loginPage.loginCredentials(sauceData)

})