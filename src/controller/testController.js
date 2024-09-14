// testing rout
export const userController1=(req,res)=>{
    res.send ("hello")
}
 export const userController2 =(req,res)=>{
    const {name}=req.body
    console.log(name)
    res.status(200).send(`your name is ${name}`)
}
 
