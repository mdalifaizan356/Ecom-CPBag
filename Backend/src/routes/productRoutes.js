import express from "express";
import verifyToken from "../middlewares/tokenVerification.js";
import productController from './../controllers/productController.js';
import wishlistController from "../controllers/wishlistController.js";
import cartController from "../controllers/cartController.js";
import orderController from "../controllers/orderController.js";
import { uploadMemory } from "../middlewares/multerConfig.js";
import requestLogger from "../middlewares/logMiddleware.js";


const router = express.Router();  
router.post("/addproduct", verifyToken, uploadMemory, requestLogger, productController.addProduct);
router.get("/allProduct", productController.allProduct);
router.get("/supplierproduct", verifyToken, productController.supplierProduct);
router.get("/fetchselectedproduct/:ProductId", verifyToken, productController.fetchSelectedProduct);
router.get("/activeproducts", verifyToken, productController.activeProducts);
router.get("/inactiveproducts", verifyToken, productController.inactiveProducts);
router.patch("/changeproductstatus/:ProductId", verifyToken, productController.changeProductStatus);
router.patch("/editselectedproduct/:ProductId", verifyToken, productController.editSelectedProduct);
router.delete("/deleteselectedproduct/:ProductId", verifyToken, productController.deleteSelectedProduct);


export default router;