import mongoose from "mongoose";
import bcrypt from "bcrypt";
import configuration from "../config/configuration.js";

const { BCRYPT_SALT } = configuration;
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    min: 4,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["admin", "superadmin", "user"],
    default: "user",
  },
  status: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  try {
    const hashedPassword = bcrypt.hash(this.password, Number(BCRYPT_SALT));
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

export default model("users", userSchema);
