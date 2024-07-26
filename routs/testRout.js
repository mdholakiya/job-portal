import express from "express"
const router= express.Router();

router.get("/",(req,res)=>{
    res.send("hello")
})

router.post("/login",(req,res)=>{
    const Name= req.body.name
    console.log(Name)
    res.status(200).send(`your name is ${Name}`)
})

export default router