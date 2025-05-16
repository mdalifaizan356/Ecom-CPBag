import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    SupplierId:{
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
    Status: { 
        type: String,
        enum: ["in-stock", "low-stock", "out-of-stock"],
        default: "in-stock",
    },
},
{
    versionKey:false,
    timestamps:true
}
);

const inventoryModel = mongoose.model('Inventory', inventorySchema);
export default inventoryModel;