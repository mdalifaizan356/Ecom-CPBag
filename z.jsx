import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axiosInstance from "../../lib/axios.js";

const CreateOrder = () => {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const { cartItems = [], source} = location.state || {};
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    const itemsWithQuantity = cartItems.map((item) => ({...item, Quantity: item.Quantity || 1,}));
    setProducts(itemsWithQuantity);
  }, [cartItems]);



  const updateQuantity = (index, change) => {
    setProducts((prev) => {
    const updated = prev.map((item, i) => {
      if (i === index) {
        const newQty = item.Quantity + change;
        return {...item, Quantity: newQty > 0 ? newQty : 1};
      }
      return item;
      });
      return updated;
    });
  };

  const getTotal = () =>products.reduce((sum, item) => sum + item.ProductId.Price * item.Quantity, 0);
  const total = products.reduce((sum, item) => sum + item.ProductId.Price * item.Quantity, 0);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const getAllAddress = async () => {
    try {
      const response = await axiosInstance.get(`/userroutes/myaddress`);
      if (response.status === 200) {
        setAddresses(response.data.address);
      }
    }
    catch (error) {
      console.error("Error fetching addresses:", error);
      toast.error("Failed to fetch addresses! Please try again.");
    }
    };
  
    useEffect(() => {
      getAllAddress();
    }, []);

    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePlaceOrder = () => {
    const orderData ={
      Products : products,
      BuyerAddress : selectedAddress._id ,
      PaymentMode : paymentMethod,
      GrandTotal : total,

    };
    console.log("Order Placed:", orderData);
    alert("Order placed successfully!");
  };

  console.log(products);
  
  return(
    <div className="md:w-full mx-auto p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Step {step}</h2>
      {step === 1 && (
        <div className="max-w-3xl mx-auto p-4 border border-amber-300 min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Secure Checkout</h2>
          {products.map((item, index) => (
            <div key={item.ProductId._id} className="flex justify-between items-center border-b py-3">
              <div>
                <h3 className="font-semibold">{item.ProductId.Name}</h3>
                <p>₹{item.ProductId.Price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(index, -1)}>-</button>
                <span>{item.Quantity}</span>
                <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(index, 1)}>+</button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <h3 className="text-lg font-semibold">Total: ₹{getTotal()}</h3>
            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="bg-gray-400 text-white px-4 py-2 rounded">Back</button>
              <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="font-semibold mb-2">Choose Address</h3>
          {addresses.map((address) => (
          <div key={address._id} className="border p-2 rounded my-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="selectedAddress" value={address._id} checked={selectedAddress?._id === address._id} onChange={() => setSelectedAddress(address)}/>
              <span>{address.FullName}, {address.Street}, {address.City}, {address.Pincode}</span>
            </label>
          </div>
          ))}
          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="bg-gray-400 text-white px-4 py-2 rounded">Back</button>
            <button onClick={() => setStep(3)} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <div className="mb-2">
            <label className="block">
              <input type="radio" name="payment" value="COD" checked={paymentMethod === "COD"} onChange={(e) => setPaymentMethod(e.target.value)}/>Cash on Delivery</label>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="bg-gray-400 text-white px-4 py-2 rounded">Back</button>
            <button onClick={() => setStep(4)} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="font-semibold mb-2">Review Order</h3>
          <div>
            <div className="flex overflow-x-auto gap-4 mb-5 mt-5 px-2 py-4">
              {cartItems.map((item, index) => (
                <div key={index} className="min-w-[45%] flex-shrink-0 border border-red-700 p-2 rounded">
                <div className="mb-2">
                  <figure><img src={item.ProductId.Images[0]} alt="Product" className="w-full h-32 object-contain" /></figure>
                </div>
              <div className="p-1">
                <p>Quantity: {item.Quantity}</p>
                <p>₹{item.ProductId.Price * item.Quantity}</p>
              </div>
            </div>
            ))}
          </div>
          <div>
            <p><strong>Product</strong><span>{selectedAddress.FullName}, {selectedAddress.Street}, {selectedAddress.City}, {selectedAddress.Pincode}</span></p>
            <p><strong>Payment:</strong> {paymentMethod}</p>
          </div>
          <div>
             <h3 className="mt-4 font-bold">Total: ₹{total}</h3>
          </div>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={() => setStep(2)} className="bg-gray-400 text-white px-4 py-2 rounded">Back</button>
            <button onClick={handlePlaceOrder} className="bg-green-600 text-white px-4 py-2 rounded">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateOrder;