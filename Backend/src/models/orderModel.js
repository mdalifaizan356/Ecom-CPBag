import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    BuyerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    Products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: Number,
        amountTotalQuantity: Number,
    }],
    BuyerAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    },
    PaymentMode:{
        type:String
    },
    GrandTotal:{
        type:Number
    },
    Status: {
        type: String,
        enum: ["Pending", "Cancel", "Delivered", "Return", "Returned", "Approve"],
        default: "Pending"
    },
    isPaid: {
        type:Boolean,
        default: false,
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean, 
        default: false,
    },
    deliveredAt:{
        type:Date
    },
}, { versionKey: false, timestamps: true });


const orderModel = mongoose.model('orders', orderSchema);
export default orderModel;
