import React, { useState, useEffect } from "react";
import axiosInstance from "../../lib/axios.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../Components/CommonComp/Loader.jsx";
import {Trash2, ShoppingCart, Heart} from "lucide-react"

const UserCart = () => {
  const navigate = useNavigate();
  const [bags, setBags] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const Role = localStorage.getItem("role");

  const getAllProduct = async () => {
    try {
      const response = await axiosInstance.get(`/cartroutes/cartproduct`);
      if (response.status === 200) {
        const AllProducts = response.data.products;
        console.log(AllProducts)
        setBags(AllProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products! Please try again.");
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [refresh]);

const buyNow = async (ProductId) => {
    toast.error("Please Add to cart");
  }; 


  const deleteCartProduct = async (CartProductId) => {
    if (Role === null) {
      navigate("/login");
      return;
    }
    try {
      console.log(CartProductId);
      const response = await axiosInstance.delete(`/cartroutes/deletecartproduct/${CartProductId}`);
      setRefresh(!refresh);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error on add to cart product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };


    const moveCartToWishlist = async (CartProductId) => {
    if (Role === null) {
      navigate("/login");
      return;
    }
    try {
      console.log(CartProductId);
      const response = await axiosInstance.post(`/cartroutes/movecarttowishlist/${CartProductId}`);
      setRefresh(!refresh);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error on add to cart product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };


      const increementCartProduct = async (CartProductId) => {
    if (Role === null) {
      navigate("/login");
      return;
    }
    try {
      console.log(CartProductId);
      const response = await axiosInstance.patch(`/cartroutes/increementcartproduct/${CartProductId}`);
      setRefresh(!refresh);
      if (response.status === 200) {
        // toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error on add to cart product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };


      const decreementCartProduct = async (CartProductId) => {
    if (Role === null) {
      navigate("/login");
      return;
    }
    try {
      console.log(CartProductId);
      const response = await axiosInstance.patch(`/cartroutes/decreementcartproduct/${CartProductId}`);
      setRefresh(!refresh);
      if (response.status === 200) {
        // toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error on add to cart product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };



  return (
    <>
      <div className="md:flex flex-wrap justify-center">
{bags.length > 0 ? (
        bags.map((bag) => (
        <div key={bag._id || bag.ProductId._id} className="card bg-base-100 md:w-1/4 w-full shadow-sm border border-amber-950 mt-2 mb-2">
  <figure>
    <img
      src={bag.ProductId.Images[0]}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bag.ProductId.Name}<div className="badge badge-secondary">{bag.ProductId.Tag}</div></h2>
    <p>Price:  {bag.ProductId.Price}</p>
    <p>Availability: {bag.Status}</p>
    <div className="card-actions justify-between">
    <div className="flex">
    {bag.Quantity>1?(
      <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-700 transition" onClick={()=> decreementCartProduct(bag._id)}>-</button>
    ):
    (
      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition" onClick={()=> deleteCartProduct(bag._id)}><Trash2/></button>
      
    )} 
      <p className="p-2">{bag.Quantity}</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition" onClick={()=> increementCartProduct(bag._id)}>+</button>
    </div>
    <div>
      {/* <button className="badge" onClick={()=> deleteCartProduct(bag._id)}><Trash2 color="red"/></button> */}
      <button className="badge" onClick={()=> moveCartToWishlist(bag._id)}><Heart color="red"/></button>
    </div>
    </div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={buyNow}>Buy Now</button>
  </div>
</div>
      ))
      ):
      (
        <div className="text-center py-10 min-h-[70vh]">
        <h1 className="text-6xl">No Products in Cart!</h1>
      </div>
      )}
      </div>
    </>
  );
};

export default UserCart;  