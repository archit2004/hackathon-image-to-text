//Initializing modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//Initializing express
const app=express();
const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

