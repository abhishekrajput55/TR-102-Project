import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductNavbar from "../components/ProductNavbar";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Get existing user info from localStorage (the basic info you already store)
  const [basicUserInfo, setBasicUserInfo] = useState({
    ownerName: localStorage.getItem("ownerName") || "",
    role: localStorage.getItem("role") || "",
  });

  const [formData, setFormData] = useState({
    fullName: basicUserInfo.ownerName || "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "cod",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
    }, 1000);
  };

  if (orderPlaced) {
    return (
      <div className="w-full h-fit mt-32">
        <ProductNavbar title="Order Confirmation" />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-checkbox-circle-fill text-4xl text-green-500"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600 mb-2">
              Thank you for your order. Your order ID is:{" "}
              <span className="font-semibold">ORD-{Date.now()}</span>
            </p>
            <p className="text-gray-600 mb-8">
              We'll send you a confirmation email shortly.
            </p>
            <div className="space-x-4">
              <Link
                to="/products"
                className="bg-themeColor text-bgColor px-6 py-3 rounded-lg hover:bg-opacity-90 transition inline-block"
              >
                Continue Shopping
              </Link>
              <Link
                to="/orders"
                className="border border-themeColor text-themeColor px-6 py-3 rounded-lg hover:bg-themeColor hover:text-bgColor transition inline-block"
              >
                View Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-fit">
      <ProductNavbar title="Checkout" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {/* User Info Display */}
        {basicUserInfo.ownerName && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Account Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Name: {basicUserInfo.ownerName}</p>
              <p>Role: {basicUserInfo.role}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item._identifier} className="flex justify-between">
                    <div className="flex items-center">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-12 h-12 object-contain mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium truncate max-w-[120px]">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    ₹{(!isNaN(getCartTotal()) ? getCartTotal() : 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>
                    ₹
                    {(!isNaN(getCartTotal() * 0.18)
                      ? getCartTotal() * 0.18
                      : 0
                    ).toFixed(2)}
                  </span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>
                    ₹
                    {(!isNaN(getCartTotal() * 1.18)
                      ? getCartTotal() * 1.18
                      : 0
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method Only */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handlePlaceOrder}>
                {/* Payment Method */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>Cash on Delivery</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === "upi"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>UPI Payment</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span>Credit/Debit Card</span>
                    </label>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  className="w-full bg-themeColor text-bgColor py-3 rounded-lg hover:bg-opacity-90 transition font-semibold text-lg"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
