import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosInstance } from "./../../../../lib/axios";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ Name:"", Brand:"", Categories:"", Price:"", DND:"", Stock:"", Description:""});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const {Name, Brand, Categories, Price, DND, Stock, Description } = formData;
    setIsFormValid(
      Name.trim() !== "" && 
      Brand.trim() !== "" &&
      Categories.trim() !=="" &&
      Price.trim() !=="" &&
      DND.trim() !=="" &&
      Stock.trim() !=="" &&
      Description.trim() !==""
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/productroutes/addProduct`, formData);
      if (response.status === 200) {
        toast.success("Add Product!");
        setFormData({ ...formData, Name:"", Brand:"", Categories:"", Price:"", DND:"", Stock:"", Description:""});
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("SignUp Failed! Please try again.");
    }
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-1">
      <div className="flex flex-col  items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Add Product</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium"></span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="text" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Product Name" name="Name" value={formData.Name} onChange={handleChange} required />
                </div>
              </div>
            </div>

<div className="form-control">
  <label className="label"><span className="label-text font-medium">Brand</span></label>
    <div className="flex gap-2">
      <div className="relative flex-1">
        <select name="Brand" value={formData.Brand} onChange={handleChange} className="select select-bordered w-full max-w-xs">
          <option value="" disabled>Select a Brand</option>
            <option value="Wildcraft">Wildcraft</option>
            <option value="Skybags">Skybags</option>
            <option value="Aristocrat">Aristocrat</option>
            <option value="Gucci">Gucci</option>
            <option value="American Tourister">American Tourister</option>
            <option value="VIP">VIP</option>
            <option value="Samsonite ">Samsonite </option>
            <option value="Da Milano">Da Milano</option>
            <option value="Safari">Safari</option>
            <option value="Fastrack">Fastrack </option>
            <option value="Lavie">Lavie </option>
            <option value="Caprese">Caprese</option>
            <option value="Targus">Targus</option>
            <option value="Tommy Hilfiger">Tommy Hilfiger</option>
            <option value="Nike">Nike</option>
            <option value="Puma">Puma</option>
        </select>
      </div>
    </div>
  </div>

            <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Categories</span>
          </label>
        <div className="flex gap-2">
      <div className="relative flex-1">
        <select
          name="Categories"
          value={formData.Categories}
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="" disabled>Select a Category</option>
          <option value="School Bag">School Bag</option>
          <option value="College Backpacks">College Backpacks</option>
          <option value="Laptop Bag">Laptop Bag</option>
          <option value="Travel Bag">Travel Bag</option>
          <option value="Office Bag">Office Bag</option>
          <option value="Handbag (Women’s Bag)">Handbag (Women’s Bag)</option>
          <option value="Sling Bag">Sling Bag</option>
          <option value="Gym Bag">Gym Bag</option>
          <option value="Trekking & Hiking Bag">Trekking & Hiking Bag</option>
          <option value="Duffel Bag">Duffel Bag</option>
          <option value="Trolley/Luggage Bag">Trolley/Luggage Bag</option>
          <option value="Camera Bag">Camera Bag</option>
          <option value="Baby Diaper Bag">Baby Diaper Bag</option>
          <option value="Wallets & Small Pouche">Wallets & Small Pouche</option>
          <option value="Anti-Theft Bag">Anti-Theft Bag</option>
        </select>
      </div>
    </div>  
  </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="number" className="input input-bordered input-dark w-full pl-10" placeholder="EnterPrice" name="Price" value={formData.Price} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Deals and Discount</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="text" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Discount" name="DND" value={formData.DND} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Stock</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="Number" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Available Stock" name="Stock" value={formData.Stock} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="text" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Description" name="Description" value={formData.Description} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="flex justify-around form-control mt-6">
              <button type="submit" className="btn btn-primary w-full" disabled={!isFormValid}>{isFormValid ? "Add Product" : "Fill Form"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../lib/axios.js';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    BrandName: "",
    Size: "",
    Color: "#000000",
    Price: "",
    Description: "",
    Stock: "",
    Images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // ✅ Convert FileList to Array
    setFormData(prev => ({
      ...prev,
      Images: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      if (key === "Images") {
        value.forEach((file) => {
          form.append("Images", file); 
        });
      } else {
        form.append(key, value);
      }
    }

    try {
      const response = await axiosInstance.post(`/productroute/addproduct`, form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData({
          Name: "",
          BrandName: "",
          Size: "",
          Color: "#000000",
          Price: "",
          Description: "",
          Stock: "",
          Images: []
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Sorry....!! Something went wrong");
    }
  };

  return (
        <div className="min-h-screen grid lg:grid-cols-1">
      <div className="flex flex-col  items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Add Product</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium"></span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="text" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Product Name" name="Name" value={formData.Name} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Brand</span>
          </label>
        <div className="flex gap-2">
      <div className="relative flex-1">
        <select
          name="Brand"
          value={formData.Brand}
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="" disabled>Select a Brand</option>
              <option value="Wildcraft">Wildcraft</option>
              <option value="Skybags">Skybags</option>
              <option value="Aristocrat">Aristocrat</option>
              <option value="Gucci">Gucci</option>
              <option value="American Tourister">American Tourister</option>
              <option value="VIP">VIP</option>
              <option value="Samsonite ">Samsonite </option>
              <option value="Da Milano">Da Milano</option>
              <option value="Safari">Safari</option>
              <option value="Fastrack">Fastrack </option>
              <option value="Lavie">Lavie </option>
              <option value="Caprese">Caprese</option>
              <option value="Targus">Targus</option>
              <option value="Tommy Hilfiger">Tommy Hilfiger</option>
              <option value="Nike">Nike</option>
              <option value="Puma">Puma</option>
        </select>
      </div>
    </div>
  </div>

            <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Categories</span>
          </label>
        <div className="flex gap-2">
      <div className="relative flex-1">
        <select
          name="Categories"
          value={formData.Categories}
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="" disabled>Select a Category</option>
          <option value="School Bag">School Bag</option>
          <option value="College Backpacks">College Backpacks</option>
          <option value="Laptop Bag">Laptop Bag</option>
          <option value="Travel Bag">Travel Bag</option>
          <option value="Office Bag">Office Bag</option>
          <option value="Handbag (Women’s Bag)">Handbag (Women’s Bag)</option>
          <option value="Sling Bag">Sling Bag</option>
          <option value="Gym Bag">Gym Bag</option>
          <option value="Trekking & Hiking Bag">Trekking & Hiking Bag</option>
          <option value="Duffel Bag">Duffel Bag</option>
          <option value="Trolley/Luggage Bag">Trolley/Luggage Bag</option>
          <option value="Camera Bag">Camera Bag</option>
          <option value="Baby Diaper Bag">Baby Diaper Bag</option>
          <option value="Wallets & Small Pouche">Wallets & Small Pouche</option>
          <option value="Anti-Theft Bag">Anti-Theft Bag</option>
        </select>
      </div>
    </div>  
  </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="number" className="input input-bordered input-dark w-full pl-10" placeholder="EnterPrice" name="Price" value={formData.Price} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Deals and Discount</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="text" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Discount" name="DND" value={formData.DND} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Stock</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="Number" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Available Stock" name="Stock" value={formData.Stock} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type="text" className="input input-bordered input-dark w-full pl-10" placeholder="Enter Description" name="Description" value={formData.Description} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="flex justify-around form-control mt-6">
              <button type="submit" className="btn btn-primary w-full" disabled={!isFormValid}>{isFormValid ? "Add Product" : "Fill Form"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;






// import React , {useState, useEffect} from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import axiosInstance from '../../lib/axios';
// import {toast} from "react-hot-toast";

// const AddProduct = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     Name:"",
//     BrandName:"",
//     Size:"",
//     Color:"",
//     Price:"",
//     Description:"",
//     Stock:"",
//     Images:[]
//   });

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData({...formData, [name]: value}); 
//   }

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post(`/productroute/addproduct`, formData);
//       if(response.status===200){
//         toast.success(response.data.message);
//         // setFormData({});
//       }
//     }
//     catch (error) {
//       toast.error("Sorry....!! Somthing wents Wrong"); 
//     }
//   }

//   return (
//     <>
//       <div className='w-1/2 h-screen m-auto flex justify-center items-center'>
//         <div className=' w-full'>
//           <div className='flex justify-center items-center'>
//             <h1>Add Product</h1>
//           </div>
//           <div className='flex justify-center items-center'>
//             <form onSubmit={handleSubmit} className="space-y-2">

//               <label>Name</label>
//               <input type='text' name='Name' placeholder='Enter Name' value={formData.Name} className='border block' onChange={handleChange}/>

//               <label>Brand</label>
//               <input type='text' name='BrandName' placeholder='Enter Brand' value={formData.BrandName} className='border block' onChange={handleChange}/>

//               <label>Size</label>
//               <input type='text' name='Size' placeholder='Enter Size' value={formData.Size} className='border block' onChange={handleChange}/>

//               <label>Color</label>
//               <input type='color' name='Color' value={formData.Color} className='border block' onChange={handleChange}/>

//               <label>Price</label>
//               <input type='number' name='Price' placeholder='Enter Price' value={formData.Price} className='border block' onChange={handleChange}/>

//               <label>Description</label>
//               <input type='text' name='Description' placeholder='Enter Description' value={formData.Description} className='border block' onChange={handleChange}/>

//               <label>Stock</label>
//               <input type='number' name='Stock' placeholder='Enter Stock' value={formData.Stock} className='border block' onChange={handleChange}/>

//               {/* <label>Select Image</label>
//               <input type='file' multiple name='Images' placeholder='Select Images' className='border block' onChange={handleChange}/> */}

//               <button className='btn'>Add Product</button><br/>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddProduct




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axios';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    BrandName: "",
    Size: "",
    Color: "#000000",
    Price: "",
    Description: "",
    Stock: "",
    Images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // ✅ Convert FileList to Array
    setFormData(prev => ({
      ...prev,
      Images: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      if (key === "Images") {
        value.forEach((file) => {
          form.append("Images", file); 
        });
      } else {
        form.append(key, value);
      }
    }

    try {
      const response = await axiosInstance.post(`/productroute/addproduct`, form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData({
          Name: "",
          BrandName: "",
          Size: "",
          Color: "#000000",
          Price: "",
          Description: "",
          Stock: "",
          Images: []
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Sorry....!! Something went wrong");
    }
  };

  return (
    <div className='w-1/2 h-full m-auto py-8'>
      <div className='w-full'>
        <h1 className='text-2xl font-bold text-center mb-6'>Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label>Name</label>
            <input type='text' name='Name' placeholder='Enter Name' value={formData.Name} className='border block w-full' onChange={handleChange} />
          </div>

          <div>
            <label>Brand</label>
            <input type='text' name='BrandName' placeholder='Enter Brand' value={formData.BrandName} className='border block w-full' onChange={handleChange} />
          </div>

          <div>
            <label>Size</label>
            <input type='text' name='Size' placeholder='Enter Size' value={formData.Size} className='border block w-full' onChange={handleChange} />
          </div>

          <div>
            <label>Color</label>
            <input type='color' name='Color' value={formData.Color} className='border block w-full h-10' onChange={handleChange} />
          </div>

          <div>
            <label>Price</label>
            <input type='number' name='Price' placeholder='Enter Price' value={formData.Price} className='border block w-full' onChange={handleChange} />
          </div>

          <div>
            <label>Description</label>
            <input type='text' name='Description' placeholder='Enter Description' value={formData.Description} className='border block w-full' onChange={handleChange} />
          </div>

          <div>
            <label>Stock</label>
            <input type='number' name='Stock' placeholder='Enter Stock' value={formData.Stock} className='border block w-full' onChange={handleChange} />
          </div>

          <div>
            <label>Select Images</label>
            <input type='file' name='Images' multiple accept='image/*' className='border block w-full' onChange={handleFileChange} />
          </div>

          {/* ✅ Image Previews */}
          {formData.Images.length > 0 && (
            <div className='grid grid-cols-3 gap-2 mt-2'>
              {formData.Images.map((img, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(img)}
                  alt="Preview"
                  className="w-full h-32 object-cover border"
                />
              ))}
            </div>
          )}

          <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
