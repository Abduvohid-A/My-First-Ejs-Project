import otpGenerator from "otp-generator";
import User from "../models/user.model.js";
import { main } from "../utils/nodemailer.js";
import configuration from "../config/configuration.js";
import { createToken } from "../utils/token.js";

export const registerService = async (user) => {
  try {
    const existUser = await User.findOne({ username: user.username });

    if (existUser) {
      return {
        ok: false,
        values: "",
        message: "User is already exist",
        status: 400,
      };
    }
    const params = { specialChars: false, upperCaseAlphabets: false };

    const generateOtp = await otpGenerator.generate(6, params);

    const mail = await main(user.email, generateOtp);

    if (!mail) {
      return {
        ok: false,
        values: "",
        message: "Email jo'natilmadi",
        status: 400,
      };
    }

    const { ACCESS_KEY, ACCESS_TIME_OTP } = configuration.token;

    const token = await createToken({ email: user.email }, ACCESS_KEY, {
      expiresIn: ACCESS_TIME_OTP,
      algorithm: "RS256",
    });

    if (!token) {
      return {
        ok: false,
        values: "",
        message: "Token Yarata olmadi",
        status: 500,
      };
    }

    const newUser = new User(user);

    const saveUser = await newUser.save();

    return {
      ok: true,
      token,
      values: saveUser,
      message: "Successfully Created",
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      values: "",
      message: error.message,
      status: 400,
    };
  }
};

export const loginService = async (user) => {
  try {
    const existUser = await User.fondOne({ username: user.username });

    if (!existUser) {
      return {
        ok: false,
        values: "",
        message: "Send Otp",
      };
    }

    return {
      ok: true,
      values: saveUser,
      message: "Successfully Created",
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      values: "",
      message: error.message,
      status: 400,
    };
  }
};

export const otpService = async (user) => {
  try {
    const existUser = await User.fondOne({ username: user.username });

    if (existUser) {
      return {
        ok: false,
        values: "",
        message: "User is already exist",
        status: 400,
      };
    }

    existUser = new User(user);

    const saveUser = await existUser.save();

    return {
      ok: true,
      values: saveUser,
      message: "Successfully Created",
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      values: "",
      message: error.message,
      status: 400,
    };
  }
};

export const logoutService = async (user) => {
  try {
    const existUser = await User.fondOne({ username: user.username });

    if (existUser) {
      return {
        ok: false,
        values: "",
        message: "User is already exist",
        status: 400,
      };
    }

    existUser = new User(user);

    const saveUser = await existUser.save();

    return {
      ok: true,
      values: saveUser,
      message: "Successfully Created",
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      values: "",
      message: error.message,
      status: 400,
    };
  }
};
