import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    BuyerId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
    },    
    ProductId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "products",
    },    
},
{
    versionKey:false,
    timestamps:true
}
);

const wishlistModel = mongoose.model('wishlists', wishlistSchema);
export default wishlistModel;