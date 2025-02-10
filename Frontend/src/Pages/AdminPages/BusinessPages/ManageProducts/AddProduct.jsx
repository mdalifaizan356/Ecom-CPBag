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
