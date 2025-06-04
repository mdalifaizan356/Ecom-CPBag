import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../lib/axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../../../Components/CommonComp/Loader";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try { 
      const response = await axiosInstance.get(`/userroutes/fetchalluser`);
      if (response.status === 200) {
        const AllUsers = response.data.allUsers;
        setUsers(AllUsers);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products! Please try again.");
    }
  };


  useEffect(() => {
    getAllUsers();
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
      <div className="overflow-x-auto">
  <table  className="table w-full">
    <thead>
      <tr>
        <th className="sticky top-0 bg-base-200 z-10"></th>
        <th className="sticky top-0 bg-base-200 z-10">Name</th>
        <th className="sticky top-0 bg-base-200 z-10">Email</th>
        <th className="sticky top-0 bg-base-200 z-10">Visibility</th>
        <th className="sticky top-0 bg-base-200 z-10">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                {/* <div className="mask mask-squircle h-12 w-12">
                  <img src={bag.ProductId.Images[0]} alt={bag.ProductId.Name} className="h-full w-full object-cover"/>
                </div> */}
              </div>
            </div>
          </td>
          <td><div className="font-bold">{user.Name}</div></td>
          <td><div className="font-bold">{user.Email}</div></td>
          <td><div className="font-bold">{user.Status?"Public":"Private"}</div></td>
          <td>
            <button className="text-green-500 btn btn-ghost btn-xs" onClick={() => changeVisibilitySelectedProduct(user._id)}>Visibility</button>
            <Link to={`editproduct/${user._id}`} className="text-blue-500 btn btn-ghost btn-xs">Edit</Link>
            <button className="text-red-500 btn btn-ghost btn-xs" onClick={() => deleteSelectedProduct(user._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  );
};

export default AllUser;
