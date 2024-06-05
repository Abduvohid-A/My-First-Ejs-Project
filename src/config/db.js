import mongoose from "mongoose";
import configuration from "./configuration";

const { MONGODB_URI } = configuration;

export const connectDB = async (req, res) => {
  try {
    const con = await mongoose.connect(MONGODB_URI);
    console.log(`Mongo DB connected on host : ${con.connection}`);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
