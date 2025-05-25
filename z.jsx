import React, { useState, useEffect } from "react";
import axiosInstance from "../../lib/axios.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../Components/CommonComp/Loader.jsx";
import { Trash2, ShoppingCart, Heart } from "lucide-react"
import AddressForm from "../../Components/UserComp/AddressForm.jsx";

const UserAddress = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [formVisiblitity, setFormVisiblitity] = useState(true);
  const Role = localStorage.getItem("role");

  const getAllAddress = async () => {
    try {
      const response = await axiosInstance.get(`/userroutes/myaddress`);
      if (response.status === 200) {
        const AllAddress = response.data.address;
        console.log(AllAddress)
        setAddresses(AllAddress);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products! Please try again.");
    }
  };

  useEffect(() => {
    getAllAddress();
  }, [refresh]);

  const addAddress = async () => {
    toast.error("Please Add to cart");
  };

  return (
    <>
<div className="md:flex flex-wrap justify-center items-center border border-amber-800">
  <div>
    {
      formVisiblitity ? (
        <div className="text-center min-h-[70vh] md:flex flex-wrap justify-center items-center">
          <div className="md:flex flex-wrap justify-center items-center">
            <button className="text-black hover:text-red-500" onClick={() => (setFormVisiblitity(!formVisiblitity))}>
              <div className="card bg-base-100 w-full shadow-sm border border-amber-950">
                <div className="card-body">
                  <h1 className="text-8xl">+</h1>
                  <h2 className="card-title">Add Address</h2>
                </div>
              </div>
            </button>
          </div>
        </div>
      ):(
          <AddressForm formVisiblitity={formVisiblitity} setFormVisiblitity={setFormVisiblitity} />
        )
    }
  </div>
        {addresses.length > 0 ? (
          <div className="w-1/2 flex md:flex flex-wrap justify-center items-center border border-amber-800">
            <div className="md:flex flex-wrap justify-center">
                  {addresses.map((addresse) => (
                    <div key={addresse._id} className="card bg-base-100 md:w-1/4 w-full shadow-sm border border-amber-950 mt-2 mb-2">
              <div className="card-body">
                <h2 className="card-title">{addresse.FullName}</h2>
                <p>{addresse.Street}</p>
                <div className="card-actions justify-between">
                <div>
                  {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={buyNow}>Buy Now</button> */}
            
                </div>
                <div>
                  {/* <button className="badge" onClick={()=> addToWishlist(bag.ProductId._id)}><Heart color="red"/></button>
                  <button className="badge" onClick={()=> addToCart(bag.ProductId._id)}><ShoppingCart/></button> */}
                </div>
                </div>
              </div>
            </div>
                  ))}  
                  </div>
            </div>
        ) :(
          <>
          {
            formVisiblitity ? (
              <div className="text-center min-h-[70vh] md:flex flex-wrap justify-center items-center">
            <div className="md:flex flex-wrap justify-center items-center">
              <button className="text-black hover:text-red-500" onClick={() => (setFormVisiblitity(!formVisiblitity))}>
                <div className="card bg-base-100 w-full shadow-sm border border-amber-950">
                <div className="card-body">
                  <h1 className="text-8xl">+</h1>
                  <h2 className="card-title">Add Address</h2>
                </div>
              </div>
              </button>
            </div>
            </div>
            ):(
              <AddressForm formVisiblitity={formVisiblitity} setFormVisiblitity={setFormVisiblitity} />
            )
          }
            </>
          )}
    </div>
    </>
  );
};

export default UserAddress;  