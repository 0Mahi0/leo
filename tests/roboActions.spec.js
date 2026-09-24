import {test, expect} from "@playwright/test"
test ("Handling Robo Actions", async ({page}) => {

    //Browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")
    //scroll into view
    await page.locator("[id='field1']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    
    //double click
        await page.locator("[id='field1']").clear()
    await page.waitForTimeout(2000) 

    await page.locator("[id='field1']").fill("John Doe")
    await page.waitForTimeout(2000)

    await page.locator("text=copy Text").dblclick()
    await page.waitForTimeout(2000)

    


})



test("Handling drag and drop", async ({page}) => {

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //mouse hover
    await page.locator("[id='draggable']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //mouse drag and drop   
    const source =  page.locator("#draggable")
    const target =  page.locator("#droppable")

    //approach 1
    //await page.dragAndDrop('#draggable', '#droppable')

    //aapproach 2
    //await source.dragTo(target)
    // await page.waitForTimeout(3000)



    await page.mouse.wheel(0, -500)
    //approach 3
    await source.hover()
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(3000)




})

test("handling right click", async ({page}) => {

    //Browser launch
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html") 

    //scroll into view
    await page.locator("//span[text()='right click me']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    page.on("dialog", async (dialog) => {
        console.log(await dialog.message())
        await dialog.accept()
    })

})

test.only("handling keyboard actions", async ({page}) => {   

    //browser launch
    await page.goto("https://gotranscript.com/text-compare")
    
    //scroll into view
    await page.locator("[name='text1']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //fill
    await page.locator("[name='text1']").fill("Hello World")
    await page.waitForTimeout(2000) 
    
    
    // select All text
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(2000) 

    //copy all tect
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(2000) 

    //move to next textarea
    await page.keyboard.down("Tab") 
    await page.keyboard.up("Tab")

    //paste all text
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)

    //enter key
    await page.locator('[id="recaptcha"]').press("Enter")
    await page.waitForTimeout(2000)

    //for (let i = 0; i <=5; i++) {
      //await page.keyboard.press("ArrowDown")
      //await page.waitForTimeout(1000)
    //}

    //pause ---- to bypass the captcha
    await page.pause()





})









