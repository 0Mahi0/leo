 import{test} from "@playwright/test"

 let datas =[

        { 
            env : process.env.ENV1,
            baseURL : process.env.baseURL1,
            USER_NAME : process.env.USER_NAME1,
            PASSWORD : process.env.PASSWORD1
        },
        { 
            env : process.env.ENV2,
            baseURL : process.env.baseURL2,
            USER_NAME : process.env.USER_NAME2,
            PASSWORD : process.env.PASSWORD2
        },
        { 
            env : process.env.ENV3,
            baseURL : process.env.baseURL3,
            USER_NAME : process.env.USER_NAME3,
            PASSWORD : process.env.PASSWORD3
        }

 ]

 for(const data of datas){

 test("Reading data from DOT ENV$(element.env)", async () => {
 
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