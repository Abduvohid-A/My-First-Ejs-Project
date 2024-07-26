import jwt from "jsonwebtoken";


export const createToken = async (payload, token_key, expiresIn) => {
  try {
    const token = await jwt.sign(payload, token_key, expiresIn);
    return token;
  } catch (error) {
    console.log(error);
    return false;
  }
};
