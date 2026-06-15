import mongoose from "mongoose";
import jwt from 'jsonwebtoken'




const UserShecma = new mongoose.Schema({


    name:{
        type:String,
        required:[true , "Name Is Required"],
    },
    email:{
        type:String,
        required:[true , "email Is Required"],
    },
    password:{
        type:String,
        required:[true , "password Is Required"],
    },
   
})


UserShecma.methods.json = function(){
    return jwt.sign({id:this ._id} , "Chandresh123" ,{
       expiresIn :"1d"
    } 
        
    )
}



const User = mongoose.model("User", UserShecma)

export default User ;