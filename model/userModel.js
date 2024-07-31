import mongoose from "mongoose"
import validator from "validator"
// create schema 
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is Require"],

    },
    middleName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"email is require"],
        unique:true,
        validate:validator.isEmail,
    },
    password:{
        type:String,
        required:[true,"passwoed is require"],
        minlength:[6,"min 6 char require"]
    },
    location:{
        type:String,
        default:"India"
    },
    },
   {timestamps:true}
);
export default mongoose.model("User",userSchema);