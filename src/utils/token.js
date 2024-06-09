import jwt from "jsonwebtoken";

// const { ACCESS_KEY, REFRESH_KEY, ACCESS_TIME, ACCESS_TIME_OTP, REFRESH_TIME } =
//   configuration.token;

export const createToken = async(payload, token_key, expiresIn) => {
    try {
        const token = await jwt.sign(payload, token_key, expiresIn);
        return token;

    } catch (error) {
        console.log(error);
        return false;
    };
};



