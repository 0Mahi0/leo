import{test} from "@playwright/test"

import path from "path"
import xlsx from "xlsx"

const readData = path.join(__dirname,)// add excel file  directory path

const workbook = xlsx.readFile(readData)

const worksheet = workbook.SheetNames

const excelConvert = xlsx.utils.sheet_to_json(worksheet)

excelConvert.forEach(data => {
    est("Reading data from DOT ENV$(element.env)", async () => {
 
     //browser launch
     await page.goto("process.env.baseURL")
 
     //click on login button
     await page.locator("text=Log in").click()
 
     //username 
     await page.locator("#loginusername").fill("process.env.USER_NAME")
     
     //password
     await page.locator("#loginpassword").fill("process.env.PASSWORD")
 
     //login button
     await page.locator("button:has-text('Log in')").click()
     await page.waitForTimeout(3000)

    })

 })