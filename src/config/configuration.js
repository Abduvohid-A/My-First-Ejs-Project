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
  },
  token: {
    ACCESS_KEY: process.env.ACCESS_KEY, 
    REFRESH_KEY: process.env.REFRESH_KEY, 
    ACCESS_TIME: process.env.ACCESS_TIME, 
    ACCESS_TIME_OTP: process.env.ACCESS_TIME_OTP, 
    REFRESH_TIME: process.env.REFRESH_TIME, 
  }
};

export default configuration;
