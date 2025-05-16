import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    BuyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    SupplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    ProductId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "carts",
    },
    Quantity:{
        type: Number,
    },
    TotalAmount:{
        type: Number,
    },
    BuyerAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
    },
    PaymentMode: {
        type: String,
    },
    Status: {
        type:String,
        enum: ["Pending", "Cancel", "Delivered", "Return", "Returned", "Approve"],
        default: "Pending",
    },
    OrderDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});

const orderModel = mongoose.model('orders', orderSchema);
export default orderModel;
