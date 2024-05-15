import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 4001; // Using PORT environment variable or defaulting to 4001
const MONGODB_URI = process.env.MongoDBURImodel; // Using MongoDBURI environment variable

async function startServer() {
    try {
            await mongoose.connect(MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("Connected to MongoDB");
        } 
        catch (error) {
            console.log("Error:", error);
        }
        // Define routes
        app.use("/book", bookRoute);
        app.use("/user", userRoute);
        
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
}
startServer();
