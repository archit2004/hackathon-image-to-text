// Initializing modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initializing express
const app = express();
const PORT = 3000;

// MongoDB connection
const uri = 'mongodb://localhost:27017/DB'; // Correct the port to 27017

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB!");

    // Start the server only after a successful connection
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.error("Could not connect to MongoDB:", err);
});
