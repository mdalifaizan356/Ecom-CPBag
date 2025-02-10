import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    Name:{
        type:String,
        trim:true,
    },
    Brand:{
        type:String,
        trim:true,
    },
    parentCategory:{
        type:String,
        trim:true,
    },
    subCategory:{
        type:String,
        trim:true,
    },
    Price:{
        type:Number,
    },
    DealsAndDiscounts:{
        type:String,
    },
    Stock:{
        type:Number,
        default:0,
    },
    Description:{
        type:[String],
    },
photo:{
        type:[String],
        default:[],
    },
},
{
    versionKey:false,
    timestamps:true
}
);

const productModel = mongoose.model('product', productSchema);

export default productModel; 