import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../../lib/axios.js';
import { toast } from 'react-hot-toast';

const EditProfile = () => {
  return (
        <div className="w-full min-h-screen grid lg:grid-cols-1 border border-amber-300">
        <div className="flex flex-col  items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 ">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Edit Profile</h1>
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
          <img
            // src={previewImage}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <label className="btn btn-sm btn-outline">
            Add Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              // onChange={handleImageChange}
            />
          </label>
        </div>
          <form onSubmit="" className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='number' name="PinCode"  value="" className="input input-bordered input-dark w-full pl-10" required/>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full mb-2" >Add</button>
            </div>
          </form>
          <button type="submit" className="btn btn-error w-full">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile