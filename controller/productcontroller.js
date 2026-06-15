import mongoose from "mongoose";
import Product from "../model/Productmodel.js";
import User from "../model/usermodel.js";





export const addproduct = async (req, res) => {
  try {
    const { userid, pname, qty } = req.body;

    const user = await User.findById(userid);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const product = await Product.create({
      userid,
      pname,
      qty,
    });

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const  getall  = async (req , res )=>{
    const product = await Product.find({})
    if(!product)
    {
     return res.status(400).json({success:true  , message :"Product not found"})

    }

    return res.status(201).json({success:true  , message :"Product fetch Succefully" ,product})

}

export const getById  = async (req , res )=>{

    const {userid}= req.params
    const product = await Product.find(userid)
    if(!product)
    {
     return res.status(400).json({success:true  , message :"Product not found"})

    }

    return res.status(201).json({success:true  , message :"Product fetch Succefully" , product})

}

export const update = async (req, res) => {
  const { id } = req.params;

 

  const product = await Product.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User updated successfully",
    product,
  });
};


export const deleteproduct = async(req , res )=>{

     const { id } = req.params;

    const user = await Product.findByIdAndDelete({id})
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User updated successfully",
    user,
  });

}


