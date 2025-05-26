// import React, { useState } from 'react'
// import { Link, useNavigate, useLocation} from "react-router-dom";

// const Checkout = () => {
//     const ProductsData = useLocation();
//     const {Products, Quantity} = ProductsData.state || {};
//   return (
// <>
//   <div className="md:flex flex-wrap justify-between min-h-screen">
//     <div className="min-h-full w-full md:w-1/2">
//     <div className='flex'>
//       <div>
//         <figure>
//           <img src={Products.ProductId.Images[0]} alt="Shoes" />
//         </figure>
//       </div>
//     <div>
//       <div className="card-body">
//         <h2 className="card-title">{Products.ProductId.Name}<div className="badge badge-secondary">{Products.ProductId.Tag}</div></h2>
//         <p>Price:  {Products.ProductId.Price}</p>
//         <p>Availability: {Products.Status}</p>
//       </div>
//       <div className="flex">
//       <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">-</button>
//       <p className="p-2">{Quantity}</p>
//       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">+</button>
//     </div>
//     </div>
//   </div>
// </div>
//   <div className="min-h-full w-full  md:w-2/4"></div>
//   </div>
// </>

//   )
// } 

// export default Checkout




 import { useLocation } from "react-router-dom";
import { useState } from "react";

const dummyAddresses = [
  {
    id: "a1",
    name: "Faizan Khan",
    street: "123 Main Street",
    city: "Lucknow",
    pincode: "226001",
  },
  {
    id: "a2",
    name: "Home Address",
    street: "45 Garden Lane",
    city: "Kanpur",
    pincode: "208001",
  },
];

const Checkout = () => {
  const location = useLocation();
  // const { product } = location.state || {};
      const {Products} = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = () => {
    if (!selectedAddress || !paymentMethod) {
      alert("Please select address and payment method.");
      return;
    }

    // const orderData = {
    //   ProductId: Products.ProductId._id,
    //   Quantity, quantity,
    //   addressId: selectedAddress,
    //   paymentMethod,
    //   totalPrice: product.price * quantity,
    // };

    console.log("Placing Order:", orderData);
    // TODO: Send POST request to backend
  };

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="flex gap-10 p-4">
      {/* Left Side – Product Info + Quantity */}
      <div className="w-1/2 border rounded p-4">
        <h2 className="text-xl font-bold mb-2">Products Summary</h2>
        <img src={Products.ProductId.Images} alt={Products.ProductId.name} className="w-32 h-32 object-cover" />
        <h3 className="mt-2">{Products.ProductId.Name}</h3>
        <p className="text-gray-600">Price: ₹{Products.ProductId.Price}</p>

        <div className="flex items-center gap-3 mt-4">
          <button onClick={decreaseQty} className="px-2 py-1 border rounded">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQty} className="px-2 py-1 border rounded">+</button>
        </div>
      </div>

      {/* Right Side – Address, Payment, Order Summary */}
      <div className="w-1/2 border rounded p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Select Address</h2>
          {dummyAddresses.map((address) => (
            <label key={address.id} className="block border p-2 rounded mb-2 cursor-pointer">
              <input
                type="radio"
                name="address"
                value={address.id}
                checked={selectedAddress === address.id}
                onChange={() => setSelectedAddress(address.id)}
                className="mr-2"
              />
              {address.name}, {address.street}, {address.city} - {address.pincode}
            </label>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold">Select Payment Method</h2>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="mr-2"
            />
            Cash on Delivery (COD)
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
              className="mr-2"
            />
            UPI / Online Payment
          </label>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <p>Product Price: ₹{Products.ProductId.Price}</p>
          <p>Quantity: {quantity}</p>
          <p className="font-bold">Total: ₹{Products.ProductId.Price * quantity}</p>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
