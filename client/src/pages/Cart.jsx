// import React from "react";
// import { Link, useNavigate } from "react-router-dom"; // Make sure useNavigate is imported
// import { useCart } from "../context/CartContext";
// import ProductNavbar from "../components/ProductNavbar";

// const Cart = () => {
//   const { cartItems, getCartTotal, getCartItemCount } = useCart();

//   const navigate = useNavigate(); // This MUST be called inside the component

//   if (cartItems.length === 0) {
//     return (
//       <div className="w-full h-fit mt-32">
//         <ProductNavbar title="Your Cart" />
//         <div className="container mx-auto px-4 py-8">
//           <div className="text-center py-12">
//             <i className="ri-shopping-cart-2-line text-6xl text-gray-300 mb-4"></i>
//             <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
//             <p className="text-gray-600 mb-6">
//               Looks like you haven't added any items to your cart yet
//             </p>
//             <Link
//               to="/products"
//               className="bg-themeColor text-bgColor px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-fit mt-48">
//       <ProductNavbar title="Your Cart" />
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">
//             Shopping Cart ({getCartItemCount()} items)
//           </h1>
//           <Link to="/products" className="text-themeColor hover:underline">
//             Continue Shopping
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               {cartItems.map((item) => (
//                 <div
//                   key={item._identifier}
//                   className="flex flex-col sm:flex-row p-4 border-b border-gray-200 last:border-b-0"
//                 >
//                   <div className="w-full sm:w-32 h-32 flex-shrink-0 mb-4 sm:mb-0">
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>

//                   <div className="flex-grow sm:ml-4">
//                     <div className="flex justify-between">
//                       <div>
//                         <h3 className="font-semibold text-lg">{item.name}</h3>
//                         <p className="text-gray-600 text-sm">{item.category}</p>
//                         <p className="text-themeColor font-bold mt-1">
//                           ₹{item.price}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center mt-3">
//                       <span className="mr-2">Qty:</span>
//                       <select
//                         value={item.quantity}
//                         className="border border-gray-300 rounded px-2 py-1"
//                       >
//                         {[...Array(20)].map((_, i) => (
//                           <option key={i + 1} value={i + 1}>
//                             {i + 1}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
//               <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//               <div className="space-y-2 mb-4">
//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>
//                     ₹{(!isNaN(getCartTotal()) ? getCartTotal() : 0).toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>Free</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Tax</span>
//                   <span>
//                     ₹
//                     {(!isNaN(getCartTotal() * 0.18)
//                       ? getCartTotal() * 0.18
//                       : 0
//                     ).toFixed(2)}
//                   </span>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span>
//                     ₹
//                     {(!isNaN(getCartTotal() * 1.18)
//                       ? getCartTotal() * 1.18
//                       : 0
//                     ).toFixed(2)}
//                   </span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => navigate("/checkout")} // Simple direct usage
//                 className="w-full bg-themeColor text-bgColor py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
// new code

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductNavbar from "../components/ProductNavbar";

const Cart = () => {
  const { cartItems, getCartTotal, getCartItemCount, updateQuantity } =
    useCart();

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="w-full h-fit mt-32">
        <ProductNavbar title="Your Cart" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <i className="ri-shopping-cart-2-line text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet
            </p>
            <Link
              to="/products"
              className="bg-themeColor text-bgColor px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-fit mt-32">
      <ProductNavbar title="Your Cart" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Shopping Cart ({getCartItemCount()} items)
          </h1>
          <Link to="/products" className="text-themeColor hover:underline">
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div
                  key={item._identifier}
                  className="flex flex-col sm:flex-row p-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 mb-4 sm:mb-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-grow sm:ml-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.category}</p>
                        <p className="text-themeColor font-bold mt-1">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mt-3">
                      <span className="mr-2">Qty:</span>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item._identifier,
                            parseInt(e.target.value)
                          )
                        }
                        className="border border-gray-300 rounded px-2 py-1"
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
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
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-themeColor text-bgColor py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
