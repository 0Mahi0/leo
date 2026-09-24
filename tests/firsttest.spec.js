
import { test , expect } from "@playwright/test"

test("Get page title & url" , async function({page}){  // (page) fixer her page represent an empty tab
//browser launch
await page.goto ('https://www.demoblaze.com/')

//title & url
const pageTitle = await page.title()
console.log(pageTitle)

console.log(await page.url())

//assertion
await expect(page).toHaveTitle('store')
await expect(page).toHaveURL('hhtps://www.demoblazer.com/')
})