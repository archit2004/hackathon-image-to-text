const mongoose = require("mongoose");

const uri = 'mongodb://localhost:27017/DB'; // Change this if needed

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Could not connect to MongoDB:", err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
