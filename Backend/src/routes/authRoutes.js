import express from "express";
import authController from "../Controllers/authController.js";
import distributeOTP from './../middlewares/DestributeOTP.js';

const router = express.Router();

router.post("/sendotp", distributeOTP);
router.post("/signup", authController.signUp);
router.post("/login", authController.login);

export default router;