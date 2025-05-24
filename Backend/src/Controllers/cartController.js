import productModel from "../models/productModel.js";
import wishlistModel from './../models/wishlistModel.js';
import cartModel from './../models/cartModel.js';
import orderModel from "../models/orderModel.js";
import userModel from './../models/userModel.js';
import addressModel from './../models/addressModel.js';
import uploadFile from "../utilities/cloudinaryServices.js";
import inventoryModel from './../models/inventoryModel.js';

const cartController ={
// Add to Cart 
addToCart: async (req, res)=>{ 
    try {
        const {id} = req.user;    
        const {ProductId} = req.params;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>", ProductId);

        const product = await productModel.findById(ProductId);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>", product);
        const newNewCartItem = new cartModel({
            BuyerId: id, 
            ProductId:ProductId, 
            amaountTotalQuantity: product.Price
        });
        await newNewCartItem.save();
        res.status(200).json({ message: "Add to cart successfully" });    
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

//Buyer Cart Product
buyerCartProduct: async (req, res)=>{
    try {
        const {id} = req.user;
        const myProducts = await cartModel.find({ BuyerId: id }).populate("ProductId");
        console.log(myProducts)

        let total = 0;
        let cartProductId = [];
        for (let product of myProducts) {
            total += product.amaountTotalQuantity || 0;
            cartProductId.push(product._id)
        }
        res.status(200).json({ message: "return your all product successfully", products: myProducts, total, cartProductId:cartProductId});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},

// Increement Cart Product
increementCartProduct: async (req, res)=>{
    try {
        const {CartProductId} = req.params;
        console.log(CartProductId);
        const product = await cartModel.findById(CartProductId);
        console.log(product);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
        const increementQuantity = product.Quantity +1 ;
        const updateTotalQuantityAmount = product.amaountTotalQuantity*increementQuantity;
        await cartModel.findByIdAndUpdate(CartProductId, {Quantity: increementQuantity, amaountTotalQuantity:updateTotalQuantityAmount });
        res.status(200).json({ message: "Add Quantity successfully"});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},


// Decreement Cart Product
decreementCartProduct: async (req, res)=>{
    try {
        const {CartProductId} = req.params;
        console.log(CartProductId);
        const product = await cartModel.findById(CartProductId).populate("ProductId");
        console.log(product);
        // console.log(product.ProductId.Price)

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
        const decreementQuantity = product.Quantity -1 ;
        const updateTotalQuantityAmount = product.ProductId.Price * product.Quantity;
        await cartModel.findByIdAndUpdate(CartProductId, {Quantity: decreementQuantity, amaountTotalQuantity:updateTotalQuantityAmount });
        res.status(200).json({ message: "less Quantity successfully"});
    }
    catch (error) { 
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},

 
// Delete Selected Product from Cart
deleteCartProduct: async (req, res)=>{
    try {
        const {CartProductId} = req.params;
        console.log(CartProductId)
        await cartModel.findByIdAndDelete(CartProductId);
        res.status(200).json({ message: "Delete product successfully"});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},



// Move Selected Product from Cart to Wishlist
moveCartToWishlist: async (req, res)=>{
    try {
        const {id} = req.user;    
        const {CartProductId} = req.params;
        const product = await cartModel.findById(CartProductId);
        const NewWishItem = new wishlistModel({
            BuyerId: id, 
            ProductId: product.ProductId
        });
        await NewWishItem.save();
        await cartModel.findByIdAndDelete(CartProductId);
        res.status(200).json({ message: "Move  product in wishlist successfully"});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},

};
export default  cartController;

