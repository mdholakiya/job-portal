export  const errorMiddlewgare=(err,req,res,next)=>{
    console.log(err)
    res.status(500).send({
        success:"false",
        message:"blah blah bahla lgg",
        err
})
}
