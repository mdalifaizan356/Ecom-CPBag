import React, { useState, useEffect } from "react";
import axiosInstance from "../../lib/axios.js";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../Components/CommonComp/Loader.jsx";
import {Heart, ShoppingCart} from "lucide-react"

const AllProducts = () => {
  const [bags, setBags] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const getAllProduct = async () => {
    try {
      const response = await axiosInstance.get(`/productroutes/allproduct`);
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
  }, []);


  const deleteSelectedProduct = async(ProductId)=>{
    try {
      const response = await axiosInstance.delete(`/productroutes/deleteselectedproduct/${ProductId}`);
    if (response.status === 200) {
      toast.success("Product deleted successfully!");
      getAllProduct();
    }
  } catch (error) {
    console.error("Delete error:", error);
    toast.error("Failed to delete product");
  }
  };

  const changeVisibilitySelectedProduct = async(ProductId)=>{
    try {
      const response = await axiosInstance.patch(`/productroutes/changeproductstatus/${ProductId}`);
    if (response.status === 200) {
      toast.success("Status Changed successfully!");
      getAllProduct();
    }
  } catch (error) {
    console.error("update error:", error);
    toast.error("Failed to Change Status");
  }

  }

  return (
    <>
      <div className="overflow-auto max-h-[70vh] md:flex flex-wrap justify-center">
      {bags.map((bag) => (
        <div className="card bg-base-100 md:w-1/4 w-full shadow-sm border border-amber-950 mt-2 mb-2">
  <figure>
    <img
      src={bag.ProductId.Images[0]}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bag.ProductId.Name}<div className="badge badge-secondary">{bag.ProductId.Tag}</div></h2>
    <p>Price:  {bag.ProductId.Price}</p>
    <p>Availability: {bag.Status}</p>
    <div className="card-actions justify-end">
      <div className="badge"><Heart color="red"/></div>
      <div className="badge"><ShoppingCart/></div>
    </div>
  </div>
</div>
      ))}  
      </div>

    </>
  );
};

export default AllProducts;




