import {test , expect } from "@playwright/test"

import { getConnection} from "./dbConnect"

test ("handling CRUD operation in DB", async ()=>{
    
  const connectDb = await getConnection()

//CREATE TABLE
  const createTable =  await connectDb.execute(`CREATE TABLE StudentList(
    Std_Id INT Primary Key Auto_Increment ,
    Std_Name VARCHAR(50) NOT NULL,
    Std_Ph VARCHAR (20) UNIQUE NOT NULL,
    Std_email VARCHAR (80) UNIQUE NOT NULL,
    Std_JoinDate DATETIME not null,
    Std_Marks INT CHECK(Std_Marks > 0)
    ); `)

    console.log(await createTable)


})
