// npm pakages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
// files pakages
import connectDb from "./src/config/db.js";
import testRout from "./src/routs/testRout.js"
import authRout from "./src/routs/authRout.js";
import { errorMiddlewgare } from "./src/middleWare/errorMiddleWare.js";


// dot env config
 dotenv.config();

//  mongodb connection
 connectDb()

// express rest-object&port
const app=express();
const port =process.env.PORT ||8999;

// middle ware
app.use(express.json())
app.use(cors());
app.use(morgan());

// rout
app.use("/user/test",testRout)
app.use("/user/auth",authRout)
app.use(errorMiddlewgare)


app.listen(port,()=>{
    
    console.log(`server is running on ${port}`)
})

