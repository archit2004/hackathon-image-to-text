//Initializing modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
//Import Routes
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
//Initializing express
const app=express();
const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
