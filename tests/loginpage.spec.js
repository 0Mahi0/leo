import { test , expect} from "playwright/test"

test("handling login page" , async function ({page})
{

    //browser launch
    await page.goto("http://demoblaze.com/")

    //titile url

    const pageTitle = await page.title()
    console.log(pageTitle)

    console.log(await page.url())


//assertion
await expect (page).toHaveTitle('STORE')
await expect(page).toHaveURL('https://demoblaze.com/')

//single web element
await page.locator('[id="login2"]').click()
await page.locator('#loginusername').fill('Raviteja18')
await page.locator("#loginpassword").fill('Trend@123')

await expect(page.locator('[onclick="logIn()"]')).toBeVisible()
await page.locator('[onclick="logIn()"]').click()

//multiple web element
const productsList = await page.$$('//div//h4//a')

for (const element of  productsList){
    const text = await element.textContent()
    console.log(text)
}

}) 