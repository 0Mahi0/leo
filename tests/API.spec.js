
import { test, expect} from "@playwright/test"
import { request } from "http"
import { json } from "stream/consumers"

let baseURL ="https://dummyjson.com"
let token

test("Get All Users", async ({request})=>{      // using this request fixer only we can call api 
     const response = await request.get(baseURL + "/users")
     const body =  await response.json()
console.log(body)


await expect (await response.status()).toBe(200)
})


test( "login and get tokens", async ({request})=>{

const response = await request.post(baseURL + "/user/login" , {

    headers : {
        "Content-Type" : "application/json"
    },
    data : {
        username: 'emilys',
    password: 'emilyspass'
    }

})

const body = await response.json()
console.log(body)

token = await body.accessToken

await expect(await response.status()).toBe(200)

})

test( "Get Current Authenticated user", async ({request})=>{

const response = await request.get(baseURL + "/user/me", {
    headers : {
        "Authorization" : "Bearer " + token
    }
})

const body = await response.json()
console.log(body)

await expect(response.status()).toBe(200)

})

test("Add new user", async({request})=>{

    const response = await request.post(baseURL+ "/users/add",{
        headers :{"content-type" : "application.json"},
        data :{
            firstName: 'Muhammad',
            lastName: 'Ovi',
            age: 250,
        }


    })

    const body = await response.json()
console.log(body)

expect(response.status()).toBe(201)
})


test("update user" , async ({request})=>{

    const response = await request.put(baseURL+"/users/2", {
        headers :{ "Content-Type" :"application/json"} ,
        data :{
            firstName: 'Mahi',
            lastName: '234',
            age: 78,
        }
    })
const body = await response.json()
console.log(body)

expect(response.status()).toBe(200)
})


test("Delete user" , async ({request})=>{

const response = await request.delete(baseURL+ "/users/2")
expect(response.status()).toBe(200)

console.log("successfully deleted")
})

test.only( "add user", async ({request})=>{
    const response = await request.post(baseURL+ "/users/add", {
        headers : { "Content-Type" :"application/json"} , 
        data: {
                firstName: 'Muhammad',
                lastName: 'Ovgig',
                age: 25
              }
    })

 const body = await response.json()
 console.log(body)

 expect(response.status()).toBe(201)

})






