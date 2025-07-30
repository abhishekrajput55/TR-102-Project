
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Only declare this once

  const handlePrev = () => {
    setCurrentImg((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImg((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="flex flex-col justify-between min-h-[340px] bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="relative h-44 mb-4">
        <img
          src={product.images[currentImg]}
          alt={product.name}
          className="w-full h-full object-contain rounded"
        />
        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-bgColor bg-opacity-70 hover:bg-opacity-100 p-1 rounded-full"
            >
              <i className="ri-arrow-left-s-line text-xl text-themeColor"></i>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-bgColor bg-opacity-70 hover:bg-opacity-100 p-1 rounded-full"
            >
              <i className="ri-arrow-right-s-line text-xl text-themeColor"></i>
            </button>
          </>
        )}
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>

      <h2 className="text-lg font-semibold truncate" title={product.name}>
        {product.name}
      </h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-xs text-gray-400">Brand: {product.brand}</p>

      <div className="mt-3">
        <p className="text-themeColor font-bold text-lg">
          ₹{product.price}{" "}
          <span className="text-sm font-medium text-gray-500">/pc</span>
        </p>
        {product.originalPrice && (
          <p className="text-sm text-gray-500 line-through">
            ₹{product.originalPrice}
          </p>
        )}
      </div>

      <div className="mt-2 flex items-center gap-1">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`ri-star${
                i < Math.floor(product.rating || 0) ? "-fill" : "-line"
              }`}
            ></i>
          ))}
        </div>
        <span className="text-xs text-gray-500">({product.rating || 0})</span>
      </div>

      <div className="mt-4 space-y-2">
        <button
          className="w-full flex items-center justify-center gap-2 bg-themeColor text-bgColor py-2 rounded hover:bg-opacity-90 transition"
          onClick={handleBuyNow}
        >
          <i className="ri-flashlight-line text-lg"></i>
          Buy Now
        </button>
        <button
          className="w-full flex items-center justify-center gap-2 border border-themeColor text-themeColor py-2 rounded hover:bg-themeColor hover:text-bgColor transition"
          onClick={handleAddToCart}
        >
          <i className="ri-shopping-cart-line text-lg"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
