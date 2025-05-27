// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const Checkout = () => {
//   const location = useLocation();
//   const { cartItems = [] } = location.state || {};

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const itemsWithQuantity = cartItems.map((item) => ({
  //     ...item,
  //     Quantity: item.Quantity || 1,
  //   }));
  //   setProducts(itemsWithQuantity);
  // }, [cartItems]);

//   const updateQuantity = (index, change) => {
//   setProducts((prev) => {
//     const updated = prev.map((item, i) => {
//       if (i === index) {
//         const newQty = item.Quantity + change;
//         return {
//           ...item,
//           Quantity: newQty > 0 ? newQty : 1,
//         };
//       }
//       return item;
//     });
//     return updated;
//   });
// };

//   const getTotal = () =>
//     products.reduce(
//       (sum, item) => sum + item.ProductId.Price * item.Quantity,
//       0
//     );

//   const handlePlaceOrder = () => {
//     const orderData = {
//       items: products,
//       totalAmount: getTotal(),
//     };

//   };

//   return (
    // <div className="max-w-3xl mx-auto p-4 border border-amber-300 min-h-screen">
    //   <h2 className="text-2xl font-bold mb-4">Secure Checkout</h2>
    //   {products.map((item, index) => (
    //     <div key={item.ProductId._id} className="flex justify-between items-center border-b py-3">
    //       <div>
    //         <h3 className="font-semibold">{item.ProductId.Name}</h3>
    //         <p>₹{item.ProductId.Price}</p>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(index, -1)}>-</button>
    //         <span>{item.Quantity}</span>
    //         <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(index, 1)}>+</button>
    //       </div>
    //     </div>
    //   ))}
    //   <div className="mt-6 text-right">
    //     <h3 className="text-lg font-semibold">Total: ₹{getTotal()}</h3>
    //     <button onClick={handlePlaceOrder} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">Place Order</button>
    //   </div>
    // </div>
//   );
// };

// export default Checkout;





import React, { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(1);

  // All states centralized
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartItems, setCartItems] = useState([
    { name: "Bag", price: 1500, quantity: 1 },
    { name: "Shoes", price: 2000, quantity: 2 }
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    const orderData = {
      address,
      paymentMethod,
      cartItems,
      total
    };

    console.log("✅ Order Placed:", orderData);
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 border min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Checkout - Step {step}</h2>

      {/* Step 1: Address */}
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 w-full mb-2"
            value={address.name}
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 w-full mb-2"
            value={address.phone}
            onChange={(e) => setAddress({ ...address, phone: e.target.value })}
          />
          <textarea
            placeholder="Address"
            className="border p-2 w-full mb-2"
            value={address.addressLine}
            onChange={(e) => setAddress({ ...address, addressLine: e.target.value })}
          />
          <button onClick={() => setStep(2)} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}

      {/* Step 2: Payment */}
      {step === 2 && (
        <div>
          <h3 className="font-semibold mb-2">Choose Payment Method</h3>
          <div className="mb-2">
            <label className="block">
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label className="block">
              <input
                type="radio"
                name="payment"
                value="Online"
                checked={paymentMethod === "Online"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Online Payment
            </label>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="bg-gray-400 text-white px-4 py-2 rounded">Back</button>
            <button onClick={() => setStep(3)} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div>
          <h3 className="font-semibold mb-2">Review Order</h3>
          <p><strong>Name:</strong> {address.name}</p>
          <p><strong>Phone:</strong> {address.phone}</p>
          <p><strong>Address:</strong> {address.addressLine}</p>
          <p><strong>Payment:</strong> {paymentMethod}</p>

          <h4 className="mt-4 font-semibold">Items:</h4>
          {cartItems.map((item, index) => (
            <p key={index}>{item.name} × {item.quantity} = ₹{item.price * item.quantity}</p>
          ))}

          <h3 className="mt-4 font-bold">Total: ₹{total}</h3>

          <div className="flex justify-between mt-4">
            <button onClick={() => setStep(2)} className="bg-gray-400 text-white px-4 py-2 rounded">Back</button>
            <button onClick={handlePlaceOrder} className="bg-green-600 text-white px-4 py-2 rounded">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
