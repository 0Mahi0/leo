



export class HomePage {

    constructor(page) {
        this.page = pag
        this.dropdown = page.locator('[data-test="product_sort_container"]')
        this.productsList = page.locator('.inventory_item_name')        
        this.addToCartButton = page.locator('button:has-text("Add to cart")')
        this.shoppingCart = page.locator('.shopping_cart_link')
        this.cartBadge = page.locator('.shopping_cart_badge')
    
      
    }

async selectDropdown() {
    await this.dropdown.selectOption('Price (low to high)')
    await this.page.waitForTimeout(5000)

}

async selectProduct() {
    const products = this.productsList
    for (const element of products) {
        const text = await element.textContent()
        if (text.includes("Test.allTheThings() T-Shirt (Red)")) {
            await element.click()
            break
        }
    }
    await 
}

async addToCart() {
    await this.addToCartButton.click()
    await this.shoppingCart.click()
    await this.cartBadge.waitFor({ state: "visible" })
    const badgeText = await this.cartBadge.textContent()
    console.log(badgeText)
}