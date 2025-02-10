import express from "express";
import productController from "../Controllers/productController.js";

const router = express.Router();

router.post("/addProduct", productController.addProduct);
router.get("/allProducts", productController.allProducts);
router.get("/selectedproduct/:id", productController.selectedProduct);

export default router;