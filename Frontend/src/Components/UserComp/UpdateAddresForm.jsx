import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../../lib/axios.js';
import { toast } from 'react-hot-toast';

const AddressForm = ({refresh, setRefresh, updateFormVisiblitity, setUpdateFormVisiblitity, address}) => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: address.FullName,
    Street: address.Street,
    HouseNumber: address.HouseNumber,
    Landmark: address.Landmark,
    CityTownVillage: address.CityTownVillage,
    District: address.District,
    State: address.State,
    PinCode: address.PinCode,
    PhoneNumber: address.PhoneNumber,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.patch(`/userroutes/editselectedaddress/${address._id}`, formData);
      if (response.status === 200) {
        toast.success(response.data.message);
        setUpdateFormVisiblitity(!updateFormVisiblitity);
        setRefresh(!refresh)

      }
    } catch (error) {
      console.error(error);
      toast.error("Sorry....!! Something went wrong");
    }
  };

  return (
        <div className="w-full min-h-screen grid lg:grid-cols-1 border border-amber-300">
        <div className="flex flex-col  items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 ">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Edit Address</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="FullName"  value={formData.FullName} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Street Number</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="Street"  value={formData.Street} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">House Number</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="HouseNumber"  value={formData.HouseNumber} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Landmark</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="Landmark"  value={formData.Landmark} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">City/Town/Village</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="CityTownVillage"  value={formData.CityTownVillage} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">District</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="District"  value={formData.District} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">State</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="State"  value={formData.State} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Pin Code</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='number' name="PinCode"  value={formData.PinCode} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Phone Number</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='number' name="PhoneNumber"  value={formData.PhoneNumber} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full mb-2" >Add</button>
            </div>
          </form>
          <button type="submit" className="btn btn-error w-full" onClick={() => (setUpdateFormVisiblitity(!updateFormVisiblitity))}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddressForm