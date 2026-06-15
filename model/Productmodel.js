import mongoose from "mongoose";





const Productschema  = new mongoose.Schema({


    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"User",
        required:[true , "Userid Is Required"],
    },
    pname:{
        type:String,
        required:[true , "email Is Required"],
    },
    qty:{
        type:String,
        required:[true , "password Is Required"],
    },
   
})



const Product = mongoose.model("Product", Productschema)
export default Product ;