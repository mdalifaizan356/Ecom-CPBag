import React, { useState, useEffect } from "react";
import axiosInstance from "../../lib/axios.js";
import { toast } from "react-hot-toast";
import { Trash2, SquarePen } from "lucide-react";
import AddressForm from "../../Components/UserComp/AddressForm.jsx";
import UpdateAddresForm from "../../Components/UserComp/UpdateAddresForm.jsx";

const UserAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [formVisiblitity, setFormVisiblitity] = useState(false);
  const [updateFormVisiblitity, setUpdateFormVisiblitity] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const getAllAddress = async () => {
    try {
      const response = await axiosInstance.get(`/userroutes/myaddress`);
      if (response.status === 200) {
        setAddresses(response.data.address);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      toast.error("Failed to fetch addresses! Please try again.");
    }
  };

  useEffect(() => {
    getAllAddress();
  }, [refresh]);

  const deleteAddress = async (AddressId) => {
    try {
      const response = await axiosInstance.delete(`/userroutes/deleteaddress/${AddressId}`);
      setRefresh(!refresh);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting address:", error);
      toast.error("Failed to delete address. Please try again.");
    }
  };

  return (
  <>
    {formVisiblitity ? (<AddressForm formVisiblitity={formVisiblitity} setFormVisiblitity={setFormVisiblitity}/>) : updateFormVisiblitity ? (
        <UpdateAddresForm refresh={refresh} setRefresh={setRefresh} updateFormVisiblitity={updateFormVisiblitity} setUpdateFormVisiblitity={setUpdateFormVisiblitity} address={selectedAddress}/>
        ) : (
        <div className="flex flex-wrap justify-center gap-2 p-4 min-h-[70vh]">
          <div onClick={() => setFormVisiblitity(true)} className="card w-72 bg-base-100 shadow-md border border-dashed border-gray-400 flex items-center justify-center cursor-pointer p-4 hover:border-blue-600 transition h-[70vh]">
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-600">+ Add New Address</p>
            </div>
          </div>
          {addresses.map((address) => (
            <div key={address._id} className="card w-72 bg-base-100 shadow-md border border-amber-950 p-1">
              <div className="card-body bg-emerald-100">
                <h1 className="text-sm font-semibold">{address.FullName}</h1>
                <p>{address.HouseNumber}, {address.Street}, {address.Landmark}</p>
                <p>{address.CityTownVillage}</p>
                <p>{address.District}, {address.State}, {address.PinCode}</p>
                <p>{address.Country}, {address.PhoneNumber}</p>
                <div className="card-actions justify-center mt-5">
                  <button className="badge hover:bg-blue-700" onClick={() => {setSelectedAddress(address); setUpdateFormVisiblitity(true)}}><SquarePen /></button>||
                  <button className="badge hover:bg-blue-700" onClick={() => deleteAddress(address._id)}><Trash2 /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserAddress;
