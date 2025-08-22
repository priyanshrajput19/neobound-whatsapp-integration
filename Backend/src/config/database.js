import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
  try {
    const mongoUri = config.mongo_uri || "mongodb+srv://Priyansh:neoubound.ai@neoboundai.tdlnwab.mongodb.net/neobound";
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
