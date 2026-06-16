import mongoose from "mongoose";
import User from "../model/usermodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();





export const register = async(req , res)=>{
    const {name , email , password}=req.body ;

    if(!name|| !email ||!password)
    {
        return res.status(400).json({ success:false ,  message:"All Fields Are Required"})
    }

    const existuser = await  User.findOne({email})
    if(existuser)
     {
        return res.status(400).json({ success:false ,  message:"User Alredy Exist"})
    }

    const hashpassword = await bcrypt.hash(password , 10)

    const user = await User.create({
        name , email , password :hashpassword

    })

    return res.status(201).json({ success:true , message : "User Register Succefully" , user })


}

export const login =  async(req   , res)=>{

    const { email , password}=req.body ;

    if( !email ||!password)
    {
        return res.status(400).json({ success:false ,  message:"All Fields Are Required"})
    }

    const user = await User.findOne({email});
    if(!user)
        {
        return res.status(400).json({ success:false ,  message:"Invalid Email Or Password"})
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(400).json({ success:false ,  message:"Invalid Email Or Password"});
    }

     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

     return res.status(201).json({ success:true ,  message:"User Login Succefully" , user , token});

    
}