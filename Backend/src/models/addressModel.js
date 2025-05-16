import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        required: true 
    },    
    ReceiverName:{
        type:String,
        required:true
    },
    ReceiverPhNo:{
        type:Number,
        required:true
    },
    PostalCode:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Apartment:{
        type:String,
        required:true
    },
    LandMark:{
        type:String,
        required:true
    },
},
{
    versionKey:false,
    timestamps:true
}
);

const addressModel = mongoose.model('addresses', addressSchema);
export default addressModel;



