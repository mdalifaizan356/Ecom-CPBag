import userModel from "../models/userModel.js";
import otpModel from "../models/otpModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey =  process.env.SECRETKEY;

const authController ={
    //SignUp
    signUp: async (req, res)=>{ 
        try {
            const {Name, Email, Password, OTP} = req.body;
            const userOTP = await otpModel.findOne({Email});
            if(userOTP){
                const compareOTP = userOTP.OTP == OTP;
                if(!compareOTP){
                    return res.status(400).json({ Email, message: "Invalid OTP" });
                }
                const user = await userModel.findOne({Email});
                    if(user){
                    return res.status(400).json({message: "Email Already Exist!"});
                    };
                    const salt = bcrypt.genSaltSync(10);
                    const hashPass = bcrypt.hashSync(Password, salt);
                    const userData={
                    Name ,Email, Password:hashPass
                    };
                    const newUser = new userModel(userData);
                    await newUser.save();
                    return res.status(200).json({ Email, message: "Create Account Successfull" });
            }
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

    // Login
    login:async(req, res)=>{
        try {
            const {Email, Password} = req.body;
            console.log(Email, Password);
            const user = await userModel.findOne({Email});
            const userRole = user.Role;
            if(!user){
                return res.status(400).json({message: "Email Not Ragistered.!"});
            }
            const currectPass = user.Password;
            const matchPass = await bcrypt.compare(Password, currectPass);
            if(!matchPass){
                return res.status(400).json({message: "Invalid Credentials!"});
            }
            const token = jwt.sign({id: user._id, email: user.Email }, secretKey, {expiresIn:"1h"})
            res.cookie("authToken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 60 * 60 * 1000,
            });
            return res.status(200).json({userRole, message: "Login Successfully!"});
        }
        catch (error) {
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

};
export default  authController


