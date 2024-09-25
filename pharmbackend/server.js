// Initializing modules
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Adjust the path as needed

// Initializing express
const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Start the server after the connection is established
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
