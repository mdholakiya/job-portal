import mongoose from "mongoose"
// connect with mongodb 
const connectDb= async()=>{
try{
 const conn=await mongoose.connect(process.env.MONGO_URL)
 console.log(`mongo db connected ${mongoose.connection.host}`)

}catch(error){
    console.log(`mongodb error ${error}`)
}
}

export default connectDb;

