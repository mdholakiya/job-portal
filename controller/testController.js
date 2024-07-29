
export const userController1=(req,res)=>{
    res.send ("hello")
}
 export const userController2 =(req,res)=>{
    const Name=req.body.name;
    console.log(Name)
    res.status(200).send(`your name is ${Name}`)
}
 