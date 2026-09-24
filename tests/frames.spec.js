import {test , expect} from "@playwright/test"
test ("Handling Frames ", async ({page}) => {

    //browser launch
    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    //Size Of Frames
    const framesList = await page. frames().length
    console.log(framesList)

    //APPROACH - 1

    let framel = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})
    await framel.locator('[name="mytext1"]').fill('JavaScript')
    await page. waitForTimeout (3000)

    // APPRAOCH - 2
    await page.frameLocator('[src="frame_2.html"]')
    .locator('[type="text"]').fill('Playwright')

    await page.waitForTimeout(3000)

    //Handle Inner Frame
    let frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"})
    const childFrames = await frame3.childFrames()
    console.log(await childFrames.length)

    await childFrames[0].locator('[class="AB7Lab Id5V1"]').nth(1).click()
    await page.waitForTimeout(2000)

    await childFrames[0].locator('[class="uHMk6b fsHoPb"]').last().click()
    await page.waitForTimeout (5000)

})