import express from "express";
import verifyToken from "../middlewares/TokenVarification.js";
import cartController from "../controllers/cartController.js";
import wishlistController from "../controllers/wishlistController.js";
import orderController from "../controllers/orderController.js";

const router = express.Router();
 
router.post("/addtocart/:ProductId", verifyToken, cartController.addToCart);
router.patch("/increementcartproduct/:CartProductId", verifyToken, cartController.increementCartProduct);
router.patch("/decreementcartproduct/:CartProductId", verifyToken, cartController.decreementCartProduct);
router.post("/movecarttowishlist/:CartProductId", verifyToken, cartController.moveCartToWishlist);
router.get("/cartproduct", verifyToken, cartController.buyerCartProduct);
router.delete("/deletecartproduct/:CartProductId", verifyToken, cartController.deleteCartProduct);








export default router;