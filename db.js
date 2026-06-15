import mongoose, { connect } from "mongoose";



export const dbcneection = async() =>{


    try {
        await mongoose.connect(process.env.MONGO_URI ,{
            dbName:"Demo"
        })
        console.log("MongoDb Connected")
        
    } catch (error) {
        console.error("Failed To Connect" , error)
        
    }
}