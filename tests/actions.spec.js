
import {test, expect} from "@playwright/test"

test('Handling Radio & CheckBoxes',async function({page}){

//browser launch
await page.goto("https://testautomationpractice.blogspot.com/")
await page.waitForTimeout(2000)

//approach 1
await page.locator('[id="male"]').click()
await page.waitForTimeout(2000)

//assertion
await expect(page.locator('[id="male"]')).toBeChecked()
await page.waitForTimeout(2000)

//approach 2
await page.locator('//label [text() ="Male"]').check()
await page.waitForTimeout(2000)

//assertion
await expect(await page.locator("//label [text() ='Male']").isChecked()).toBeTruthy()
await page.waitForTimeout(2000)

//single checkbox
await page.locator('[id="sunday"]').check()
await page.waitForTimeout(2000)

//multiple checkboxes
const multiCheckBoxes = [

page.locator('#monday') , page.locator('[id="thursday"]')
]

// select multiple check boxes
for (const element of multiCheckBoxes){
    await element.check()
    await page.waitForTimeout(150)
    await expect(element).toBeChecked()

}

// Unselect Multiple checkboxes

for (const element of multiCheckBoxes) {
    await element.uncheck()
    await page.waitForTimeout(1500)
    await expect(element).not.toBeChecked()
}


})