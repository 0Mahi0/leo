import { test , expect} from "@playwright/test"

test ("Handling Web Table ", async ({page}) => {
    //Browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll into view
    await page.locator("[id='productTable']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(1000) 

    //coloumn count
    const tableColoumn = await page.$$("//table[@id='productTable']//thead//tr//th")
    console.log("coloumn count is " , tableColoumn.length)

    //row count
    const tableRow = await page.locator("//table[@id='productTable']//tbody//tr")
    console.log("row count is " , await tableRow.count())

    //fetch specific cell value -- select a product 
    const selectedProd = await tableRow.filter({
        has : page.locator("td"),
        hasText : "Tablet"
    })

    await selectedProd.locator('input').click()
    await page.waitForTimeout(3000) 

    //select multiple products
    //async function multiProd(prodName) {
    //const selectedProd = await tableRow.filter({
      //  has : page.locator("td"),
      //  hasText: prodName
    //})


    //read the first page datas
    for (let i = 0; i < await tableRow.count(); i++) { // will iterate row wise
        let tds = await tableRow.nth(i).locator("td")
        console.log(await tds.allTextContents())

        for (let j = 0; j < await tds.count(); j++) { // will iterate coloumn wise
            let text = await tds.nth(j).textContent()  
            console.log(await text)
        }

    }

    // read the data from all pages
    const totalPages = await page.locator("//ul[@id='pagination']//li//a")
    console.log("total pages are " ,await totalPages.count())

    for(let k = 0; k < await totalPages.count(); k++) {
        if(k >= 0) {
        await totalPages.nth(k).click()
        }

        const rows = await page.$$("//table[@id='productTable']//tbody//tr//td")
        
        for (const element of rows) {
            console.log(await element.textContent())
        }
        await page.waitForTimeout(2000)
    }   
})