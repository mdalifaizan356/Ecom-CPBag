import userModel from "../models/userModel.js";
import addressModel from './../models/addressModel.js';
import bcrypt from "bcrypt"

const userController ={
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


// Fetch All User
    fetchAllUser: async (req, res)=>{
        try {
            const allUsers = await userModel.find();
            console.log(allUsers)
            res.status(200).json({ message: "return your all product successfully", allUsers: allUsers});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },


// Fetch Single User
    fetchSingleUser: async(req, res)=>{
        try {
            const{id} = req.user;
            const userData = await userModel.findById(id);
            res.status(200).json({ message: "User Data Successfully Fetched", userData: userData});

        }
        catch(error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});    
        }
    },


// Add Address
    addAddress: async (req, res)=>{ 
        try {
            const {id} = req.user;
            const {FullName,Street, HouseNumber, Landmark, CityTownVillage, District, State, PinCode, PhoneNumber } = req.body;
            console.log(FullName,Street, HouseNumber, Landmark, CityTownVillage, District, State, PinCode, PhoneNumber);
            const newAddress = new addressModel({
                userId: id, 
                FullName,
                Street,
                HouseNumber,
                Landmark,
                CityTownVillage,
                District,
                State,
                PinCode,
                PhoneNumber
            });
            await newAddress.save();
            res.status(200).json({ message: "Address added successfully" });
            
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

 
// All Address
    myAddress: async (req, res)=>{
        try {
                const {id} = req.user;
                const myAddress = await addressModel.find({userId:id});
                res.status(200).json({ message: "return your all product successfully", address: myAddress});
            }
            catch (error) {
                console.log(error)
                return res.status(500).json({message: `Internal Server Error ${error}`});
            }
    },

// Delete Selected Address
deleteAddress: async (req, res)=>{
        try {
            const {AddressId} = req.params;
            await addressModel.findByIdAndDelete(AddressId);
            res.status(200).json({ message: "Delete address successfully"});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },

// Fetch Selected Product
fetchSelectedAddress: async (req, res)=>{
        try {
            const {AddressId} = req.params;
            const selectedAddress = await addressModel.findById(AddressId);
            res.status(200).json({ message: "Fetch selected product successfully", selectedAddress});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },
// Edit Selected Product
editSelectedAddress: async (req, res)=>{
        try {
            const {AddressId} = req.params;
            const { FullName,Street, HouseNumber, Landmark, CityTownVillage, District, State, PinCode, PhoneNumber} = req.body;
            await addressModel.findByIdAndUpdate(AddressId, {FullName,Street, HouseNumber, Landmark, CityTownVillage, District, State, PinCode, PhoneNumber});
            res.status(200).json({ message: "Update Address successfully"});
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({message: `Internal Server Error ${error}`});
        }
    },


};
export default  userController;



