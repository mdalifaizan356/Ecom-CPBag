import productModel from "../models/productModel.js";
import wishlistModel from './../models/wishlistModel.js';
import cartModel from './../models/cartModel.js';
import orderModel from "../models/orderModel.js";
import userModel from './../models/userModel.js';
import addressModel from './../models/addressModel.js';
import uploadFile from "../utilities/cloudinaryServices.js";

import inventoryModel from "../models/inventoryModel.js";

const orderController ={
// //Create Order
// createOrder: async (req, res)=>{ 
//     try {
//         const {id} = req.user;
//         const { totalAmount, cartProductId, AddressId, selectedMethod  } = req.body;
//         // console.log(totalAmount, cartProductId, AddressId, selectedMethod);

//         const product = await cartModel.findById(cartProductId).populate("ProductId");
//         const SupplierId = product.ProductId.SupplierId

//         const newOrder = new orderModel({
//             BuyerId: id,
//             SupplierId,
//             CartProductId:cartProductId,
//             BuyerAddress:AddressId,
//             TotalAmount:totalAmount,
//             PaymentMode:selectedMethod
//         });
//         await newOrder.save();
//         console.log(newOrder.CartProductId);
//         const cartItems = await cartModel.find({_id: { $in: newOrder.CartProductId }});
        
//         await Promise.all(cartItems.map(async (cartItem) => {
//             const { ProductId, Quantity } = cartItem;

//             const inventoryItem = await inventoryModel.findOne({ ProductId });
          
//             if (inventoryItem) {
//               inventoryItem.Quantity -= Quantity;
          
//               if (inventoryItem.Quantity <= 0) {
//                 inventoryItem.Quantity = 0;
//                 inventoryItem.Status = 'out-of-stock';
//               }
//               else if (inventoryItem.Quantity <= 5) {
//                 inventoryItem.Status = 'low-stock';
//               }
//               else {
//                 inventoryItem.Status = 'in-stock';
//               }
//               await inventoryItem.save();
//             }
//           }));
//         res.status(200).json({ message: "Order Placed successfully" });
//     }
//     catch (error) {
//         console.log(error)
//         return res.status(500).json({message: `Internal Server Error ${error}`});
//     }
// },


//Create Order
createOrder: async (req, res)=>{ 
    try {
        const {id} = req.user;
        const {CartProductId, AddressId, selectedMethod  } = req.body;
        // console.log(">>>>>>>>>>>>>>>>>>",CartProductId);

        const product = await cartModel.findById(CartProductId).populate("ProductId");
        console.log(product);
        const SupplierId = product.ProductId.SupplierId

        const newOrder = new orderModel({
            BuyerId: id,
            SupplierId,
            ProductId: product.ProductId,
            Quantity: product.Quantity,
            TotalAmount: product.amaountTotalQuantity,
            BuyerAddress:AddressId,
            PaymentMode:selectedMethod
        });
        await newOrder.save();

        // console.log(">>>>>>>>>>>>>>>>>>>>>",newOrder.ProductId);
        const ProductId = newOrder.ProductId;
        const orderQuantity = newOrder.Quantity;

        // const cartItems = await cartModel.find({_id: { $in: newOrder.CartProductId }}); 
        // await Promise.all(cartItems.map(async (cartItem) => {
        //     const { ProductId, Quantity } = cartItem;

            const inventoryItem = await inventoryModel.findOne({ ProductId });
            console.log(">>>>>>>>>>>>>>>>>>>>>>",inventoryItem);
          
            if (inventoryItem) {
              inventoryItem.Quantity -= orderQuantity;
          
              if (inventoryItem.Quantity <= 0) {
                inventoryItem.Quantity = 0;
                inventoryItem.Status = 'out-of-stock';
              }
              else if (inventoryItem.Quantity <= 5) {
                inventoryItem.Status = 'low-stock';
              }
              else {
                inventoryItem.Status = 'in-stock';
              }
              await inventoryItem.save();
            }
        res.status(200).json({ message: "Order Placed successfully" });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},


// Buyer Order
buyerOrder: async (req, res)=>{
    try {
        const {id} = req.user;
        // const myOrder = await orderModel.find({BuyerId:id}).populate({path:"CartProductId", populate:{path:"ProductId"}}).populate("BuyerAddress");
        const myOrder = await orderModel.find({BuyerId:id}).populate("ProductId").populate("BuyerAddress");
        console.log(myOrder);
        res.status(200).json({ message: "return your all orders successfully", orders: myOrder});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
},


// Supplier Order
supplierorder: async (req, res)=>{
    try {
        const {id} = req.user;
        const myOrder = await orderModel.find({SupplierId:id}).populate("ProductId").populate("BuyerAddress");
        console.log(myOrder);
        res.status(200).json({ message: "return your all orders successfully", orders: myOrder});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
    },


// changeOrderStatus
changeOrderStatus: async (req, res)=>{
    try { 
        const {id} = req.user;
        const {OrderId} = req.params;
        const {Status}  = req.body;
        // console.log(">>>>>>>>>>>>>>>>>>",OrderId);
        
        const updatedOrder = await orderModel.findByIdAndUpdate(OrderId, {Status:Status}, {new:true});

        if (!updatedOrder) {
            // console.log("Order not found");
            return res.status(404).json({ message: "Order not found" });
          }
 
          const order = await orderModel.findById(OrderId);

          // console.log(">>>>>>>orderStatus>>>>>>>>>>>>>>>",order.Status);
          if (!order){
            return res.status(404).json({ message: "Order not found" });
          }

          const ProductId = order.ProductId;
          const orderQuantity = order.Quantity;

          if(order.Status === "Returned" || order.Status === "Cancel"){ 
            const inventoryItem = await inventoryModel.findOne({ ProductId });
          
            if (inventoryItem) {
              inventoryItem.Quantity += orderQuantity;
          
              if (inventoryItem.Quantity <= 0) {
                inventoryItem.Quantity = 0;
                inventoryItem.Status = 'out-of-stock';
              }
              else if (inventoryItem.Quantity <= 5) {
                inventoryItem.Status = 'low-stock';
              }
              else {
                inventoryItem.Status = 'in-stock';
              }
              await inventoryItem.save();
            }
          }
        res.status(200).json({ message: `Status is update Now`});
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({message: `Internal Server Error ${error}`});
    }
  },


};
export default  orderController;

