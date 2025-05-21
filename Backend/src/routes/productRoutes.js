import express from "express";
import verifyToken from "../middlewares/TokenVarification.js";
import productController from "../Controllers/productController.js";
import wishlistController from "../controllers/wishlistController.js";
import cartController from "../controllers/cartController.js";
import orderController from "../controllers/orderController.js";
import { uploadMemory } from "../middlewares/multerCofig.js";
import requestLogger from "../middlewares/logMiddleware.js";


const router = express.Router();  
router.post("/addproduct", verifyToken, uploadMemory, productController.addProduct);
router.get("/allproduct", productController.allProduct);
router.get("/adminproduct", verifyToken, productController.adminProduct);
router.get("/fetchselectedproduct/:ProductId", verifyToken, productController.fetchSelectedProduct);
router.get("/activeproducts", verifyToken, productController.activeProducts);
router.get("/inactiveproducts", verifyToken, productController.inactiveProducts);
router.patch("/changeproductstatus/:ProductId", verifyToken, productController.changeProductStatus);
router.patch("/editselectedproduct/:ProductId", verifyToken, productController.editSelectedProduct);
router.delete("/deleteselectedproduct/:ProductId", verifyToken, productController.deleteSelectedProduct);


export default router; 