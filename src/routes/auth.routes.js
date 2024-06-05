import { Router } from "express";
import {
    registerController,
    loginController,
    otpController,
    logoutController
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/otp", otpController);
router.post("/logout", logoutController);

export default router;