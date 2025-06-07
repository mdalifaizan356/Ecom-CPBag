import express from "express";
import userController from "../Controllers/userController.js";
import verifyToken from "../middlewares/TokenVarification.js";


const router = express.Router();
router.patch("/changepass", verifyToken, userController.changePass);
router.get("/fetchalluser", verifyToken, userController.fetchAllUser);
router.get("/fetchsingleuser", verifyToken, userController.fetchSingleUser);
router.get("/fetchselectedaddress/:AddressId", verifyToken, userController.fetchSelectedAddress);
router.post("/addaddress", verifyToken, userController.addAddress);
router.get("/myaddress", verifyToken, userController.myAddress);
router.get("/fetchselectedaddress/:AddressId", verifyToken, userController.fetchSelectedAddress);
router.delete("/deleteaddress/:AddressId", verifyToken, userController.deleteAddress);
router.patch("/editselectedaddress/:AddressId", verifyToken, userController.editSelectedAddress);


export default router;