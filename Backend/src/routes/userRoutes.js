import express from "express";
import userController from "../Controllers/userController.js";
import verifyToken from "../middlewares/TokenVarification.js";
import verifyOTP from "../middlewares/VerifyOTP.js";
import distributeOTP from "../middlewares/DestributeOTP.js";

const router = express.Router();

router.patch("/updateprofile", verifyToken, userController.updateProfile);
router.patch("/changepass", verifyToken, userController.changePass);
router.post("/resetpass", distributeOTP);
router.patch("/resetpass",verifyOTP, userController.resetPass);
router.get("/allUsers", userController.allUsers);
export default router;