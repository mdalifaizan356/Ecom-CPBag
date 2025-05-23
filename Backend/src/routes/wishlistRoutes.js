import express from "express";
import verifyToken from "../middlewares/TokenVarification.js";
import wishlistController from "../Controllers/wishlistController.js";
import productController from './../controllers/productController.js';
import cartController from "../controllers/cartController.js";
import orderController from "../controllers/orderController.js";

const router = express.Router();

router.post("/addtowishlist/:ProductId", verifyToken, wishlistController.addToWishList);
router.get("/wishlistproduct", verifyToken, wishlistController.WishlistProduct);
router.post("/movewishlisttocart/:WishlistProductId", verifyToken, wishlistController.moveWishlistToCart);
router.delete("/deletewishlistproduct/:WishlistProductId", verifyToken, wishlistController.deleteWishlistProduct);


export default router;