import mongoose from "mongoose";
import configuration from "./configuration.js";

const { MONGODB_URI } = configuration;

export const connectDB = async (req, res) => {
  try {
    const con = await mongoose.connect(MONGODB_URI);
    console.log(`Mongo DB connected on host : ${con.connection.host}`);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
