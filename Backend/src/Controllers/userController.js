import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"

const userController ={
    // Update Profile
    updateProfile: async (req, res)=>{ 
        try {
            const {id} = req.user;
            const {oldPassword, newPassword} =req.body; 
            const user = await userModel.findById(id);
            if(!user){
                return res.status(400).json({message: `User Not Found`});
            }
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },


    // Change Pass
    changePass: async (req, res)=>{ 
        try {
            const {id} = req.user;
            const {oldPassword, newPassword} =req.body; 
            const user = await userModel.findById(id);
            if(!user){
                return res.status(400).json({message: `User Not Found`});
            }
            const matchPass = await bcrypt.compare(oldPassword, user.Password);
            if(!matchPass){
                return res.status(400).json({message: `Old Password Incorrect`});
            }
            const salt = await bcrypt.genSaltSync(10);
            const hashPass = await bcrypt.hashSync(newPassword, salt);
            user.Password = hashPass;
            await user.save();

            return res.json({ message: "Password updated successfully" });
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

    // Reset Pass
    resetPass: async (req, res)=>{ 
        try {
            console.log(req.user);
            console.log("hii");
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

    // Show All Users
    allUsers: async (req, res)=>{ 
        try {
            const allUsers = await userModel.find();
            console.log(allUsers);
            return res.status(200).json({allUsers, message: `Product Save Successfully`});
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

};
export default  userController