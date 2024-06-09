import {
  registerValidation,
  loginValidation,
  otpValidation,
} from "../validations/auth.validation.js";
import {
  registerService,
  loginService,
  otpService,
  logoutService,
} from "../services/mongoose/auth.service.js";

export const registerController = async (req, res) => {
  try {
    const { body } = req;

    const { okay, value, messeges, statuss } = await registerValidation(body);

    if (!okay) {
      return res.render("register", {
        article: "Register Page",
        message: messeges,
      });
    }

    const { ok, values, status, message } = await registerService(value);

    res.cookie("access_token", values, {
      maxAge: 60000,
      httpOnly: true,
    });

    if (ok) return res.render("otp", { article: "Otp Page", message: "" });

    return res.render("register", { article: "Register Page", message });
  } catch (error) {
    console.log(error);
    return res.render("register", {
      article: "Register Page",
      message: error.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { body } = req;

    const { okay, value, messeges } = await loginValidation(body);

    if (!okay) {
      return res.render("login", { article: "Login Page", message: messeges });
    }

    const { ok, values, message } = await loginService(value);

    return res.render("login", { article: "Login Page", message });
  } catch (error) {
    console.log(error);
    return res.render("login", {
      article: "Login Page",
      message: error.message,
    });
  }
};

export const otpController = async (req, res) => {
  try {
    const { body } = req;

    const { okay, value, messeges } = await otpValidation(body);

    if (!okay) {
      return res.render("otp", { article: "Otp Page", message: messeges });
    }

    const { ok, values, message } = await otpService(value);

    if (!ok) return res.render("otp", { article: "Otp Page", message });
    else return res.render("login", { article: "Login Page", message: "" });
  } catch (error) {
    console.log(error);
    return res.render("otp", { article: "Otp Page", message: error.message });
  }
};

export const logoutController = async (req, res) => {
  try {
    const { ok, values, message } = await logoutService();

    if (!ok) return res.status(status).json({ message });
    else return res.status(status).json(values);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
