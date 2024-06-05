import dotenv from "dotenv";

dotenv.config();

export const configuration = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI
};

export default configuration;