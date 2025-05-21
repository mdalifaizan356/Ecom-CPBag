import productModel from "../models/productModel.js";
import wishlistModel from './../models/wishlistModel.js';
import cartModel from './../models/cartModel.js';
import orderModel from "../models/orderModel.js";
import userModel from './../models/userModel.js';
import addressModel from './../models/addressModel.js';
import uploadFile from "../utilities/cloudinaryServices.js";
import inventoryModel from './../models/inventoryModel.js';

const productController ={
// Add Product
    addProduct: async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.files);
        const { role } = req.user;
        if(role==="User"){
           return res.status(400).json({ message: "You are not admin"});
        }
        const { Name, Size, Color, Price, BrandName, Description, Stock } = req.body;
        const uploadedImages = await uploadFile(req.files);
        const imageUrls = uploadedImages.map((img) => img.secure_url);
        const newProduct = new productModel({
            Name,
            Size,
            Color,
            Price,
            BrandName,
            Description,
            Images: imageUrls,
            Stock,
        });
        await newProduct.save();
        const newInventoryProduct = new inventoryModel({
        ProductId: newProduct._id,
        Quantity: newProduct.Stock,
        });
        await newInventoryProduct.save();
        res.status(200).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: `Internal Server Error: ${error}` });
    }
    },


// // All Product based on product model
//     allProduct: async (req, res)=>{
//         try {
//             const Products = await productModel.find();
//             console.log(Products)
//             const inventoryProduct = await inventoryModel.find({ProductId: Products._id});
//             res.status(200).json({ message: "Fetch and Return all product successfully", products: Products, inventoryProduct});
//         }
//         catch (error) {
//             console.log(error)
//             return res.status(500).json({message: `Internal Server Error ${error}`});
//         }
//     },



// All Product based on inventory model
allProduct: async (req, res)=>{
    try {
        const Products = await inventoryModel.find({ Quantity: { $gt: 0 }}).populate("ProductId");
        console.log(Products)
        res.status(200).json({ message: "Fetch and Return all product successfully", products: Products});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},


// Admin Product
    adminProduct: async (req, res)=>{
        try {
            const {id} = req.user;
            const myProducts = await productModel.find({SupplierId:id});
            res.status(200).json({ message: "return your all product successfully", products: myProducts});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

    
// Delete Selected Product
    deleteSelectedProduct: async (req, res)=>{
        try {
            const {ProductId} = req.params;
            console.log(ProductId);
            await productModel.findByIdAndDelete(ProductId);
            res.status(200).json({ message: "Delete Product successfully"});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },


// Change Status of Selected Product 
    changeProductStatus: async (req, res)=>{
        try {
            const {ProductId} = req.params;
            const product = await productModel.findById(ProductId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
            const updatedStatus = !product.Status;
            await productModel.findByIdAndUpdate(ProductId, {Status: updatedStatus });
            res.status(200).json({ message: "Status Update successfully"});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

// Fetch Selected Product
    fetchSelectedProduct: async (req, res)=>{
        try {
            const {ProductId} = req.params;
            const selectedProduct = await productModel.findById(ProductId);
            res.status(200).json({ message: "Fetch selected product successfully", selectedProduct});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

// Edit Selected Product
    editSelectedProduct: async (req, res)=>{
        try {
            const {ProductId} = req.params;
            const { Name, Size, Color, Price, BrandName, Description, Images, Stock} = req.body;
            await productModel.findByIdAndUpdate(ProductId, {Name, Size, Color, Price, BrandName, Description, Images, Stock});
            await inventoryModel.findByIdAndUpdate(ProductId, {Quantity:Stock});
            res.status(200).json({ message: "Status Update successfully"});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

// Supplier Active Products
activeProducts: async (req, res)=>{
    try {
        const Products = await productModel.find({Status:true});
        console.log(Products)
        res.status(200).json({ message: "return your all product successfully", products: Products});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},

// Supplier Inactive Products
inactiveProducts: async (req, res)=>{
    try {
        const Products = await productModel.find({Status:false});
        console.log(Products)
        res.status(200).json({ message: "return your all product successfully", products: Products});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},

};
export default  productController;








