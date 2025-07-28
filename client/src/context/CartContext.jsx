import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      // Create a more unique identifier using name, category, and first image
      const productIdentifier = `${product.name}-${product.category}-${product.images[0]}`;

      // Check if item already exists in cart
      const existingItem = prevItems.find(
        (item) => item._identifier === productIdentifier
      );

      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map((item) =>
          item._identifier === productIdentifier
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If new item, add to cart with unique identifier
        return [
          ...prevItems,
          { ...product, _identifier: productIdentifier, quantity },
        ];
      }
    });
  };

  const removeFromCart = (productIdentifier) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._identifier !== productIdentifier)
    );
  };

  const updateQuantity = (productIdentifier, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productIdentifier);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._identifier === productIdentifier ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce(
      (count, item) => count + (parseInt(item.quantity) || 0),
      0
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
