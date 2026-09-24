import { test, expect} from "@playwright/test"

test("File Upload", async ({page}) => {

    //Browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll into view
    await page.locator("[id='singleFileInput']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(1000)

    //file upload
    await page.locator("[id='singleFileInput']").setInputFiles(
        "C:/Users/alagusubbaiah.s/OneDrive/Desktop/mahi notes/chennai theruku.docx")
    await page.waitForTimeout(1000)

    //multiple file upload
    await page.locator("[id='multipleFileInput']").setInputFiles([
        "C:/Users/alagusubbaiah.s/OneDrive/Desktop/mahi notes/random.txt", 
        "C:/Users/alagusubbaiah.s/OneDrive/Desktop/mahi notes/madurai.pdf"
    ])

    await page.waitForTimeout(1000)

  
})