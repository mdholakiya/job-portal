import express from "express";
import dotenv from "dotenv";
import connectDb from "./model/db.js";

 dotenv.config();

const app=express();
const port =process.env.PORT;

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    connectDb()
    console.log(`server is running on ${port}`)
})