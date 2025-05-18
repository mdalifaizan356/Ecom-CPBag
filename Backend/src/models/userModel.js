import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    Email:{
        type:String,
        required:true,
        trim:true,
    },
    Role:{
        type:String,
        trim:true,
        default:"User"
    },
    Password:{
            type:String,
            required:true,
            minlength:6,
        },
    ProfilePic:{
        type:String,
        default:"",
    },
},
{
    versionKey:false,
    timestamps:true
}
);

const userModel = mongoose.model('users', userSchema);

export default userModel;