import express from "express";
import verifyToken from "../middlewares/tokenVerification.js";
import orderController from "../controllers/orderController.js";
import productController from './../controllers/productController.js';
import wishlistController from "../controllers/wishlistController.js";
import cartController from "../controllers/cartController.js";

const router = express.Router();

router.post("/createorder", verifyToken, orderController.createOrder);
router.get("/buyerorder", verifyToken, orderController.buyerOrder);
router.get("/supplierorder", verifyToken, orderController.supplierorder);
router.patch("/changeorderstatus/:OrderId", verifyToken, orderController.changeOrderStatus);







export default router;