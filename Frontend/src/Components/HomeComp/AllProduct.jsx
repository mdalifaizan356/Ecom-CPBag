import React, { useState, useEffect } from "react";
import axiosInstance from "../../lib/axios.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../CommonComp/Loader.jsx";
import { Heart, ShoppingCart } from "lucide-react";

const AllProducts = () => { 
  const navigate = useNavigate();
  const [bags, setBags] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const Role = localStorage.getItem("role");

  const getAllProduct = async () => {
    try {
      setLoading(true); // start loader
      const response = await axiosInstance.get(`/productroutes/allproduct`);
      if (response.status === 200) {
        const AllProducts = response.data.products;
        setBags(AllProducts);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products! Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [refresh]);

  const addToCart = async (ProductId) => {
    if (!Role) {
      navigate("/login");
      return;
    }
    try {
      const response = await axiosInstance.post(`/cartroutes/addtocart/${ProductId}`);
      setRefresh(!refresh);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error on add to cart product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };

  const addToWishlist = async (ProductId) => {
    if (!Role) {
      navigate("/login");
      return;
    }
    try {
      const response = await axiosInstance.post(`/wishlistroutes/addtowishlist/${ProductId}`);
      setRefresh(!refresh);
      if (response.status === 200) {
        toast.success("Added to Wishlist Successfully");
      }
    } catch (error) {
      console.error("Error on add to wishlist product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };

  const buyNow = (bag) => {
    if (!Role) {
      navigate("/login");
      return;
    }
    navigate("/userdashboard/createOrder", {
      state: {
        source: "single",
        cartItems: [{ ...bag, Quantity: 1 }],
      },
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="md:flex flex-wrap justify-center bg-base-100">
      {bags.length === 0 ? (
        <p className="text-center text-xl font-semibold mt-6">No Products Found</p>
      ) : (
        bags.map((bag) => (
          <div key={bag._id || bag.ProductId._id} className="card md:w-1/4 w-full shadow-sm border border-amber-950 mt-2 mb-2">
            <figure>
              <img src={bag.ProductId.Images[0]} alt="Product" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {bag.ProductId.Name}
                <div className="badge badge-secondary">{bag.ProductId.Tag}</div>
              </h2>
              <p>Price: {bag.ProductId.Price}</p>
              <p>Availability: {bag.Status}</p>
              <div className="card-actions justify-between">
                <div>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => buyNow(bag)}
                  >
                    Buy Now
                  </button>
                </div>
                <div>
                  <button className="badge" onClick={() => addToWishlist(bag.ProductId._id)}>
                    <Heart color="red" />
                  </button>
                  <button className="badge" onClick={() => addToCart(bag.ProductId._id)}>
                    <ShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllProducts;
