
import { test, expect } from "@playwright/test" 


test("test1", async () => {
    console.log("only ")
})

test.skip("test2", async () => {
    console.log("SKIP")
})

test("test3", async () => {
    console.log("sLOW")
})

test.fail("test4", async () => {
    console.log("FAIL")
})      

test.fixme("test5", async () => {
    console.log("FIXME")
})

test("test6", async () => {
    test.setTimeout(20 * 10000)
    console.log("set timeout")
})

test("test7", async ({browsername}) => {

    if(browsername === "chromium"){
        test.skip("SKIP")
    }   
    console.log("test7")
})  