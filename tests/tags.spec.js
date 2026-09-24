

import { test, expect } from "@playwright/test"

test("Test1 @smoke", async () => {
    console.log("smoke test")
}   )

test("Test2 @regression", async () => {
    console.log("regression test")
})

test("Test3 @smoke@regression", async () => {
    console.log("smoke and regression test")
})  

test("Test4 @sanity", async () => {
    console.log("sanity test")
})

test("Test5 @smoke @sanity", async () => {
    console.log("smoke and sanity test")
})  

test("Test6 @regression @sanity", async () => {
    console.log("regression and sanity test")
})






