import dotenv from "dotenv";

dotenv.config();

const configuration = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  BCRYPT_SALT: process.env.BCRYPT_SALT,
};

export default configuration;
