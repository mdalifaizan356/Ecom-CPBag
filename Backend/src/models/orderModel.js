import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    BuyerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: Number,
        price: Number,
    }],
    BuyerAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    },
    PaymentMode:{
        type:String
    },
    TotalAmount:{
        type:Number
    },
    Status: {
        type: String,
        enum: ["Pending", "Cancel", "Delivered", "Return", "Returned", "Approve"],
        default: "Pending"
    },
    isPaid: {
        type:Boolean
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean
    },
    deliveredAt:{
        type:Date
    },
}, { versionKey: false, timestamps: true });


const orderModel = mongoose.model('orders', orderSchema);
export default orderModel;
