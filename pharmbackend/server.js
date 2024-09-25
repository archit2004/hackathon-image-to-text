// Initializing modules
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Make sure the path is correct

// Initializing express
const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Optional: Add middleware
app.use(cors());
app.use(express.json()); // If you want to handle JSON requests

// Start the server after the connection is established
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
