import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        required: true 
    },    
    FullName:{
        type:String,
        required:true
    },
    Street:{
        type:String,
        required:true
    },
    HouseNumber:{
        type:String,
        required:true
    },
    Landmark:{
        type:String,
        required:true
    },
    CityTownVillage:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    PinCode:{
        type:Number,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Country:{
        type:String,
        default: "India"
    },
},
{
    versionKey:false,
    timestamps:true
}
);

const addressModel = mongoose.model('addresses', addressSchema);
export default addressModel;



