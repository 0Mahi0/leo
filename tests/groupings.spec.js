

import { test, expect } from "@playwright/test"


test.describe.parallel("Group1", async () => {
        test("Test1", async ({ page }) => {
            console.log("Test1")
        })

        test("Test2", async ({ page }) => {
        console.log("Test2")
        })
})  

test.describe.parallel("Group2", async () => {
    test("Test3", async ({ page }) => {
        console.log("Test3")
    })              

    test("Test4", async ({ page }) => {
        console.log("Test4")

    })
})


