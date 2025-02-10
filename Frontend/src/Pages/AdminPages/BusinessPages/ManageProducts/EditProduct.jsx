import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../lib/axios";
import { toast } from "react-hot-toast";
import Loader from '../../../../Components/CommonComp/Loader';

const EditProduct = () => {
  const{id} = useParams();
  const [bag, setBag] = useState([]);
  const getOneProduct = async () => {
    try {
      const response = await axiosInstance.get(`/productroutes/selectedproduct/${id}`);
      if (response.status === 200) {
        const SelectedProduct = response.data.selectedProduct;
        setBag(SelectedProduct);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products! Please try again.");
    }
  };
  if (!bag) return <Loader/>;
  useEffect(() => {
    getOneProduct();
  }, [id]);

  return (
    <>
      <div className="flex justify-center">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 h-50">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      className="rounded-box" />
  </div>
  
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      className="rounded-box" />
  </div>
</div>
      </div>

<div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center">
  <div className="card-body">
    <h2 className="card-title">
      {bag.Name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <h2>Price: {bag.Price}</h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Update</div>
      <div className="badge badge-outline">Delete</div>
    </div>
  </div>
</div>
    </>
  )
}

export default EditProduct