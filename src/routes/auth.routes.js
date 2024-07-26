import { Router } from "express";
import {
  registerController,
  loginController,
  otpController,
  logoutController,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/otp", otpController);
router.post("/logout", logoutController);

router.get("/", (req, res) => {
  res.render("index", { article: "Home Page" });
});

router.get("/register", (req, res) => {
  res.render("register", { article: "Register Page", message: "" });
});

router.get("/login", (req, res) => {
  res.render("login", { article: "Login Page", message: "" });
});

router.get("/otp", (req, res) => {
  res.render("otp", { article: "Otp Page", message: "" });
});

router.get("/main", (req, res) => {
  res.render("main", { article: "Main Page" });
});

export default router;
