import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    BuyerId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        required: true 
    },    
    ProductId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "products",
        required: true 
    },    
    Quantity:{
        type:Number,
        default:1
    }, 
    amaountTotalQuantity:{
        type:Number,
    },
    Status: {
        type: String,
        enum: ["InCart", "InWishList", "InOrder"],
        default: "InCart",
    },
},
{
    versionKey:false,
    timestamps:true
}
);

const cartModel = mongoose.model('carts', cartSchema);
export default cartModel;