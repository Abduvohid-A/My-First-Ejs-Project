import dotenv from "dotenv";

dotenv.config();

const configuration = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  BCRYPT_SALT: process.env.BCRYPT_SALT,
  nodemailer : {
    NODEMAILER_USER: process.env.NODEMAILER_USER, 
    NODEMAILER_PASS: process.env.NODEMAILER_PASS,
    NODEMAILER_HOST: process.env.NODEMAILER_HOST,
  }
};

export default configuration;
