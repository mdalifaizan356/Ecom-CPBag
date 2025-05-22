import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../lib/axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../../../Components/CommonComp/Loader";

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
      <div className="overflow-auto max-h-[70vh]">
  <table className="table">
    <thead>
      <tr>
        <th className="sticky top-0 bg-base-200 z-10"></th>
        <th className="sticky top-0 bg-base-200 z-10">Name</th>
        <th className="sticky top-0 bg-base-200 z-10">Brand</th>
        <th className="sticky top-0 bg-base-200 z-10">Price</th>
        <th className="sticky top-0 bg-base-200 z-10">Availability</th>
        <th className="sticky top-0 bg-base-200 z-10">Visibility</th>
        <th className="sticky top-0 bg-base-200 z-10">Actions</th>
      </tr>
    </thead>
    <tbody>
      {bags.map((bag) => (
        <tr key={bag._id}>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={bag.ProductId.Images[0]} alt={bag.ProductId.Name} className="h-full w-full object-cover"/>
                </div>
              </div>
            </div>
          </td>
          <td><div className="font-bold">{bag.ProductId.Name}</div></td>
          <td><div className="font-bold">{bag.ProductId.BrandName}</div></td>
          <td><div className="font-bold">{bag.ProductId.Price}</div></td>
          <td><div className="font-bold">{bag.ProductId.Stock}</div></td>
          <td><div className="font-bold">{bag.ProductId.Status?"Public":"Private"}</div></td>
          <td>
            <button className="text-green-500 btn btn-ghost btn-xs" onClick={() => changeVisibilitySelectedProduct(bag.ProductId._id)}>Visibility</button>
            <Link to={`editproduct/${bag.ProductId._id}`} className="text-blue-500 btn btn-ghost btn-xs">Edit</Link>
            <button className="text-red-500 btn btn-ghost btn-xs" onClick={() => deleteSelectedProduct(bag._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  );
};

export default AllProducts;
