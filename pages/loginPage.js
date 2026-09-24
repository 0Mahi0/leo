
export class LoginPage {

    constructor(page) {
        this.page = page
        this.username = page.locator('[id="user-name"]')
        this.password = page.locator('[id="loginpassword"]')
        this.loginButton = page.locator('button:has-text("Log in")')
    }

    async gottoBrowser(username, password) {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async loginCredentials() {

        await this.page.locator('[id="user-name"]').fill("standard_user")   
        await this.page.locator('[id="password"]').fill("secret_sauce")
        await this.page.locator(this.loginButton).click()    
    }






}

