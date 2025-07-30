import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import underworking from "./assets/indexImg/404.gif";

// Homepage components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Quick from "./components/Quick";
import Category from "./components/Category";
import StartTrading from "./components/StartTrading";
import WelcomeSection from "./components/WelcomeSection";

// Pages
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import CommomFooter from "./components/CommomFooter";
import About from "./pages/About";
import BrandLogoSlideBar from "./components/BrandLogoSlideBar";
import RetailerDashboard from "./pages/RetailerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
// admin dashboard
import AdminProductRequests from "./pages/AdminProductRequests";
import ProductsPage from "./pages/ProductsPage";
import SellerAddProduct from "./pages/SellerAddProduct";
// cart section
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// Import ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";

// Home page layout
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Quick />
      <Category />
      <StartTrading />
      <WelcomeSection />
      <BrandLogoSlideBar />
      <CommomFooter />
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      {" "}
      {/* Wrap everything with CartProvider */}
      <Router>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Login/Register combined page */}
          <Route path="/auth" element={<Auth />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/retailerDashboard"
            element={
              <ProtectedRoute>
                <RetailerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sellerDashboard"
            element={
              <ProtectedRoute>
                <SellerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminDashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Product page (accessible after login) */}
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path="/seller/add-product"
            element={
              <ProtectedRoute>
                <SellerAddProduct />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/product-requests"
            element={
              <ProtectedRoute>
                <AdminProductRequests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/product-manage-and-view"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          {/* Cart route - also protected since products page is protected */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />

          {/* 404 page - should be at the end */}
          <Route
            path="*"
            element={
              <div className="w-full h-screen flex flex-col justify-center items-center">
                <img src={underworking} alt="" />
                <h1 className="text-2xl text-center font-bold">
                  404 Not Found
                </h1>
                <p>This feature will be implemented in future!</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
