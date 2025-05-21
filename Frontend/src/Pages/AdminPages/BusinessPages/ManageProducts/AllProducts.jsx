import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../lib/axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../../../Components/CommonComp/Loader";

const AllProducts = () => {
  const [bags, setBags] = useState([]);
  // const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const getAllProduct = async () => {
    try {
      const response = await axiosInstance.get(`/productroutes/allproduct`);
      if (response.status === 200) {
        const AllProducts = response.data.products;
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

  return (
    <>
      <div className="overflow-x-auto">
      <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th></th>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Availability</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {bags.map((bag) => (
      <tr key={bag._id}>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            {/* <div> */}
              {/* <div className="font-bold">{bag.ProductId.Name}</div> */}
              {/* <div className="text-sm opacity-50">Good</div> */}
            {/* </div> */}
          </div>
        </td>
        
        <td>
        <div className="font-bold">{bag.ProductId.Name}</div>
        </td>
        <td>
        <div className="font-bold">{bag.ProductId.BrandName}</div>
        </td>
         <td>
        <div className="font-bold">{bag.ProductId.Price}</div>
        </td>
         <td>
        <div className="font-bold">{bag.ProductId.Stock}</div>
        </td>
        <th>
          <Link to={`editproduct/${bag._id}`} className="text-blue-500 btn btn-ghost btn-xs">Edit</Link>
        </th>
      </tr>
    ))}
    </tbody>
  </table>
</div>
    </>
  );
};

export default AllProducts;
