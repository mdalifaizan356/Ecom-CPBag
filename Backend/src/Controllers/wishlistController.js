import productModel from "../models/productModel.js";
import wishlistModel from './../models/wishlistModel.js';
import cartModel from './../models/cartModel.js';
import orderModel from "../models/orderModel.js";
// import supplierModel from './../models/supplierModel.js';
import userModel from './../models/userModel.js';
import addressModel from './../models/addressModel.js';
import uploadFile from "../utilities/cloudinaryServices.js";

const wishlistController ={
// Add to wish list
addToWishList: async (req, res)=>{ 
    try {
        const {id} = req.user;    
        const {ProductId} = req.params;
        const newNewWishItem = new wishlistModel({
            BuyerId: id, 
            ProductId:ProductId
        });
        await newNewWishItem.save();
        res.status(200).json({ message: "Add new wishlist item successfully" });    
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

//Buyer Wishlist Product
WishlistProduct: async (req, res)=>{
    try {
        const {id} = req.user;
        const myProducts = await wishlistModel.find({BuyerId:id}).populate("ProductId");
        res.status(200).json({ message: "return your all product successfully", products: myProducts});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},


// Move Selected Product from wishlist to cart
moveWishlistToCart: async (req, res)=>{
    try {
        const {id} = req.user;    
        const {WishlistProductId} = req.params;
        const product = await wishlistModel.findById(WishlistProductId);
        const NewCartItem = new cartModel({
            BuyerId: id, 
            ProductId: product.ProductId
        });
        await NewCartItem.save();
        await wishlistModel.findByIdAndDelete(WishlistProductId);
        res.status(200).json({ message: "Move product successfully"});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},


deleteWishlistProduct: async (req, res)=>{
    try {
        const {WishlistProductId} = req.params;
        // console.log(WishlistProductId)
        await wishlistModel.findByIdAndDelete(WishlistProductId);
        res.status(200).json({ message: "Delete product successfully"});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},



};
export default  wishlistController;

