import otpGenerator from "otp-generator";
import User from "../models/user.model.js";


export const registerService = async (user) => {
  try {
    const existUser = await User.findOne({username: user.username});

    if (existUser) {
      return {
        ok: false,
        values: "",
        message: "User is already exist",
        status: 400
      };
    };

    const newUser = new User(user);

    const saveUser = await newUser.save();

    return {
        ok: true,
        values: saveUser,
        message: "Successfully Created",
        status: 201
    };
  
  } catch (error) {
    console.log(error);
    return {
        ok: false,
        values: "",
        message: error.message,
        status: 400
      };
  };
};

export const loginService = async (user) => {
    try {
      const existUser = await User.fondOne({username: user.username});
  
      if (!existUser) {
        return {
          ok: false,
          values: "",
          message: "Send Otp"
        };
      };
      const params = { specialChars: false, upperCaseAlphabets: false };
      const generateOtp = await otpGenerator.generate(6, params);
      
  
      return {
          ok: true,
          values: saveUser,
          message: "Successfully Created",
          status: 201
      };
    
    } catch (error) {
      console.log(error);
      return {
          ok: false,
          values: "",
          message: error.message,
          status: 400
        };
    };
  };

  export const otpService = async (user) => {
    try {
      const existUser = await User.fondOne({username: user.username});
  
      if (existUser) {
        return {
          ok: false,
          values: "",
          message: "User is already exist",
          status: 400
        };
      };
  
      existUser = new User(user);
  
      const saveUser = await existUser.save();
  
      return {
          ok: true,
          values: saveUser,
          message: "Successfully Created",
          status: 201
      };
    
    } catch (error) {
      console.log(error);
      return {
          ok: false,
          values: "",
          message: error.message,
          status: 400
        };
    };
};



  export const logoutService = async (user) => {
    try {
      const existUser = await User.fondOne({username: user.username});
  
      if (existUser) {
        return {
          ok: false,
          values: "",
          message: "User is already exist",
          status: 400
        };
      };
  
      existUser = new User(user);
  
      const saveUser = await existUser.save();
  
      return {
          ok: true,
          values: saveUser,
          message: "Successfully Created",
          status: 201
      };
    
    } catch (error) {
      console.log(error);
      return {
          ok: false,
          values: "",
          message: error.message,
          status: 400
        };
    };
};