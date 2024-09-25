// Importing modules using ES module syntax
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; // Note the .js extension

// Initializing express
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB().then(() => {
    // Optional: Add middleware
    app.use(cors());
    app.use(express.json()); // If you want to handle JSON requests

    // Start the server after the connection is established
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});
