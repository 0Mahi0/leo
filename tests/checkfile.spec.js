

test('Handling Checkboxes', async function({page}) {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    // Single checkbox
    await page.locator('[id="sunday"]').check()
    await page.waitForTimeout(2000)

    // Multiple checkboxes
    const multiCheckBoxes = [
        page.locator('#monday'),
        page.locator('[id="thursday"]')
    ]

    // Select multiple checkboxes
    for (const element of multiCheckBoxes) {
        await element.check()
        await page.waitForTimeout(150)
        await expect(element).toBeChecked()
    }

    // Unselect multiple checkboxes
    for (const element of multiCheckBoxes) {
        await element.check()
        await page.waitForTimeout(1500)
        await expect(element).not.toBeChecked()
    }
})

console.log("Hello from leo branch");
console.log("Hello from leo branch");