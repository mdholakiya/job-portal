// npm pakages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan"
// files pakages
import connectDb from "./config/db.js";
import testRout from "./routs/testRout.js"

// dot env config
 dotenv.config();

//  mongodb connection
 connectDb()

// express rest-object&port
const app=express();
const port =process.env.PORT;

// middle ware
app.use(express.json())
app.use(cors());
app.use(morgan());

// rout
app.use("/",testRout)
app.use("/login",testRout)

app.listen(port,()=>{
    
    console.log(`server is running on ${port}`)
})

