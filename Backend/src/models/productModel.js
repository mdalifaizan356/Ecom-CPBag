import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        Name:{
            type: String,
            required: true,
            trim: true,
        },
        Size:{
            type: String,
            required: true,
            trim: true, 
        },
        Price:{
            type: Number,
            required: true,
            trim: true,
        },
        BrandName:{
            type: String,
            required: true,
            trim: true,
        },
        Color:{
            type: String,
            trim: true,
            default: "Black"
        },
        Status:{
            type: Boolean,
            default: true
        },
        Description:{
            type: String,
            required: true,
            trim: true,
        },
        Stock:{
            type: Number,
            required: true,
            trim: true,
        },
        Images: {
            type: [String],
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const productModel = mongoose.model("products", productSchema);
export default productModel; 







