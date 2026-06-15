import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dbcneection } from "./db.js";
import userrouter from './router/userrouter.js'
import productrouter from './router/productrouter.js'

const app = express();
dotenv.config({path: "./.env"});


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());


app.use('/api/v1/user' , userrouter);
app.use('/api/v1/product' , productrouter);


dbcneection();


app.listen(process.env.PORT , ()=>{
    console.log(`Servere Running On PORT http://localhost:${process.env.PORT} `);
    
})