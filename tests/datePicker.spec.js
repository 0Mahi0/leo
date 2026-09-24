import { test, expect } from '@playwright/test'

test("Handling Date Picker" , async ({page})=> {

    //Browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //scroll into view
    await page.locator("#datepicker").scrollIntoViewIfNeeded()

    //approach 1
    await page.locator("#datepicker").fill("7/18/2028")
    await page.waitForTimeout(3000)
    

    //approach 2
    await page.locator("#datepicker").click()
    let selectedDate = "16"
    const selectedMonth = "september"
    const selectedYear = "2028"

    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()

    
        if(currentMonth === selectedMonth && currentYear === selectedYear) {
            break
        }

        await page.click('//span[text()="Next"]')
        //await page.click('//span[text()="prev"]')

    }   

 await page.waitForTimeout(3000)

   //approach 1
   let dates = await page.$$('//a[@class="ui-state-default"]')
  for (const element of dates) {
  let dt = await element. textContent()

  if (dt == selectedDate) {
   await element.click()
   break
        }
    }
I
    //appraoch - 2
    //await page.click(`//a[@class="ui-state-default" and text)="${selectedDate}"]`)
    //await page.waitForTimeout(3000)



})