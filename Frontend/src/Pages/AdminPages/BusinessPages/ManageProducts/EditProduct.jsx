import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../lib/axios";
import { toast } from "react-hot-toast";
import Loader from '../../../../Components/CommonComp/Loader';

const EditProduct = () => {
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
    const files = Array.from(e.target.files);
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
      const response = await axiosInstance.post(`/productroutes/addproduct`, form);

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





  const{ProductId} = useParams();
  const [bag, setBag] = useState([]);
  const getOneProduct = async () => {
    try {
      const response = await axiosInstance.get(`/productroutes/fetchselectedproduct/${ProductId}`);
      if (response.status === 200) {
        const SelectedProduct = response.data.selectedProduct;
        console.log(SelectedProduct);
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
  }, [ProductId]);

  return (
    <>
      <div className="flex justify-center">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 h-50">
  <div className="carousel-item">
    {bag.Images?.map((imgUrl, index) => (
      <div className="carousel-item" key={index}>
        <img
          src={imgUrl}
          alt={`Product Image ${index + 1}`}
          className="rounded-box h-40 w-40 object-cover"
        />
      </div>
    ))}
  </div>
</div>
</div>

{/* <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center">
  <div className="card-body">
    <h2 className="card-title">
      {bag.Name}
    </h2>
    <h2>Price: {bag.Price}</h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Update</div>
      <div className="badge badge-outline">Delete</div>
    </div>
  </div>
</div> */}




<div className="min-h-screen grid lg:grid-cols-1">
        <div className="flex flex-col  items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 ">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <h1 className="text-2xl font-bold mt-2">Add Product</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Product Name</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name="Name"  value={formData.Name} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
            <label className="label"><span className="label-text font-medium">Brand</span></label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <select name="BrandName" value={formData.BrandName} onChange={handleChange} className="select select-bordered w-full max-w-xs">
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
                <span className="label-text font-medium">Size</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name='Size'  value={formData.Size} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Color</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='color' name='Color'  value={formData.Color} className="input input-bordered input-dark w-25 pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='number' name='Price'  value={formData.Price} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='text' name='Description'  value={formData.Description} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Stock</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='number' name='Stock'  value={formData.Stock} className="input input-bordered input-dark w-full pl-10" onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Select Product Images</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
              <input type='file' name='Images' multiple accept='image/*' className="file-input file-input-error" onChange={handleFileChange} />
                </div>
              </div>
            </div>
            <div className="flex justify-around form-control mt-6">
              <button type="submit" className="btn btn-primary w-full" >Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditProduct