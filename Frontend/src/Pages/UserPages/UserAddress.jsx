import React, { useState, useEffect } from "react";
import axiosInstance from "../../lib/axios.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../Components/CommonComp/Loader.jsx";
import { Trash2, ShoppingCart, Heart } from "lucide-react"

const UserAddress = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [formVisiblitity, setFormVisiblitity] = useState(false);
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
      <div className="md:flex flex-wrap justify-center">
        {addresses.length > 0 ? (
          <button className="bg-green-600 text-white px-4 mt-10 py-2 rounded hover:bg-green-700 transition" onClick={() => (setFormVisiblitity(!formVisiblitity))}>
            <span className="text-lg">+</span>Add
          </button>
        ) :
          (
            <div className="text-center py-20 min-h-[70vh]">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition" onClick={() => (setFormVisiblitity(!formVisiblitity))}>
                <span className="text-lg">+</span>Add New Address
              </button>
            </div>

          )}
      </div>
    </>
  );
};

export default UserAddress;  