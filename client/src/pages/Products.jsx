import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";
import SlideBarHero from "../components/SlideBarHero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import SectionHeadStyle from "../components/SectionHeadStyle";
import CommomFooter from "../components/CommomFooter";
import ProductSection from "../components/ProductSection";
import {
  fmcgproducts,
  elecproducts,
  clothproducts,
  eceproducts,
  kitchenproducts,
  luggageproducts,
} from "../data/products";
import Banner from "../components/Banner";
const banners = [
  {
    image: "/assets/pageimg/fmcg_slidebaner-img-1.jpg",
    title: "Upgrade Your Wardrobe",
    description: "Shop the latest fashion trends for wholesale prices.",
    buttonText: "Explore Now",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "New Arrivals",
    description: "Catch the latest styles before they're gone!",
    buttonText: "Shop New",
  },
  {
    image: "/assets/pageimg/luggages_slidebaner-img-1.JPG",
    title: "Smart Deals Everyday",
    description: "Save more when you buy more.",
    buttonText: "Grab Deals",
  },
  {
    image: "/assets/pageimg/ece_slidebaner-img-1.JPG",
    title: "Comfort Meets Style",
    description: "Discover comfy fits for everyday wear.",
    buttonText: "Browse Now",
  },
  {
    image: "/assets/pageimg/electrical_slidebaner-img-1.JPG",
    title: "Big Discounts Inside",
    description: "Unbeatable prices on quality apparel.",
    buttonText: "Get Offer",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Seasonal Collection",
    description: "Fresh picks for every season and occasion.",
    buttonText: "View Collection",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Trusted by Retailers",
    description: "Wholesale clothing trusted by 1000+ retailers.",
    buttonText: "Join Now",
  },
];

const Products = () => {
  const { state } = useLocation();
  const title = state?.title || localStorage.getItem("ownerName") || "User";
  return (
    <div className="w-full h-fit">
      <ProductNavbar title={title} />
      <SlideBarHero slide={banners} />
      <Category />
      <ProductSection
        heading="FMCG Products"
        img="/assets/indexImg/style3.png"
        products={fmcgproducts}
        linkTo="FMCG"
      />

      <ProductSection
        heading="Electrical Products"
        img="/assets/indexImg/style3.png"
        products={elecproducts}
        linkTo="Electrical"
      />

      <ProductSection
        heading="Clothing Products"
        img="/assets/indexImg/style3.png"
        products={clothproducts}
        linkTo="Clothing"
      />

      <ProductSection
        heading="Electronics Products"
        img="/assets/indexImg/style3.png"
        products={eceproducts}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/ece_bannerimg-2.png"} />

      <ProductSection
        heading="Home and Kitchen Products"
        img="/assets/indexImg/style3.png"
        products={kitchenproducts}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/home_slidebaner2.JPG"} />

      <ProductSection
        heading="Luggage and Traveling Products"
        img="/assets/indexImg/style3.png"
        products={luggageproducts}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/luggage_slidebaner1 copy.JPG"} />
      <CommomFooter />
    </div>
  );
};

export default Products;

// new code
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import ProductNavbar from "../components/ProductNavbar";
// import SlideBarHero from "../components/SlideBarHero";
// import Category from "../components/Category";
// import ProductCard from "../components/ProductCard";
// import SectionHeadStyle from "../components/SectionHeadStyle";
// import CommomFooter from "../components/CommomFooter";
// import ProductSection from "../components/ProductSection";
// import {
//   fmcgproducts,
//   elecproducts,
//   clothproducts,
//   eceproducts,
//   kitchenproducts,
//   luggageproducts,
// } from "../data/products";
// import Banner from "../components/Banner";

// // Add these imports for the management modal
// import ProductManagementModal from "../components/ProductManagementModal"; // We'll create this

// const banners = [
//   {
//     image: "/assets/pageimg/fmcg_slidebaner-img-1.jpg",
//     title: "Upgrade Your Wardrobe",
//     description: "Shop the latest fashion trends for wholesale prices.",
//     buttonText: "Explore Now",
//   },
//   // ... rest of your banners
// ];

// const Products = () => {
//   const { state } = useLocation();
//   const title = state?.title || localStorage.getItem("ownerName") || "User";
//   const userRole = localStorage.getItem("role");
//   const [showManagementModal, setShowManagementModal] = useState(false);
//   const [userProducts, setUserProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Check if user is admin or has management privileges
//   const canManageProducts = userRole === "Admin" || userRole === "Retailer" || userRole === "Seller";

//   // Fetch user's products (for management)
//   useEffect(() => {
//     if (canManageProducts) {
//       fetchUserProducts();
//     }
//   }, [canManageProducts]);

//   const fetchUserProducts = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://localhost:5000/api/products', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUserProducts(data);
//       }
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleProductUpdate = () => {
//     // Refresh products when a product is added/edited/deleted
//     fetchUserProducts();
//   };

//   return (
//     <div className="w-full h-fit">
//       <ProductNavbar title={title} />

//       {/* Add Management Button for authorized users */}
//       {canManageProducts && (
//         <div className="fixed top-20 right-6 z-50">
//           <button
//             onClick={() => setShowManagementModal(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//           >
//             <i className="ri-add-circle-line"></i>
//             Manage Products
//           </button>
//         </div>
//       )}

//       <SlideBarHero slide={banners} />
//       <Category />

//       {/* Show User's Products Section (only for management users) */}
//       {canManageProducts && userProducts.length > 0 && (
//         <div className="px-4 sm:px-6 lg:px-8 py-8">
//           <SectionHeadStyle head="My Products" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {userProducts.slice(0, 4).map((product) => (
//               <ProductCard
//                 key={product._id}
//                 product={{
//                   id: product._id,
//                   image: product.images?.[0] || "/assets/default-product.jpg",
//                   name: product.name,
//                   price: product.price,
//                   originalPrice: product.price * 1.2,
//                   discount: "20%",
//                   rating: 4.5
//                 }}
//               />
//             ))}
//           </div>
//           <div className="text-center mt-6">
//             <button
//               onClick={() => setShowManagementModal(true)}
//               className="text-blue-600 hover:text-blue-800 font-medium"
//             >
//               View All My Products →
//             </button>
//           </div>
//         </div>
//       )}

//       <ProductSection
//         heading="FMCG Products"
//         img="/assets/indexImg/style3.png"
//         products={fmcgproducts}
//         linkTo="FMCG"
//       />

//       <ProductSection
//         heading="Electrical Products"
//         img="/assets/indexImg/style3.png"
//         products={elecproducts}
//         linkTo="Electrical"
//       />

//       <ProductSection
//         heading="Clothing Products"
//         img="/assets/indexImg/style3.png"
//         products={clothproducts}
//         linkTo="Clothing"
//       />

//       <ProductSection
//         heading="Electronics Products"
//         img="/assets/indexImg/style3.png"
//         products={eceproducts}
//         linkTo="Electronics"
//       />
//       <Banner banner={"/assets/pageimg/ece_bannerimg-2.png"} />

//       <ProductSection
//         heading="Home and Kitchen Products"
//         img="/assets/indexImg/style3.png"
//         products={kitchenproducts}
//         linkTo="Electronics"
//       />
//       <Banner banner={"/assets/pageimg/home_slidebaner2.JPG"} />

//       <ProductSection
//         heading="Luggage and Traveling Products"
//         img="/assets/indexImg/style3.png"
//         products={luggageproducts}
//         linkTo="Electronics"
//       />
//       <Banner banner={"/assets/pageimg/luggage_slidebaner1 copy.JPG"} />

//       <CommomFooter />

//       {/* Product Management Modal */}
//       {/* {showManagementModal && (
//         <ProductManagementModal
//           onClose={() => setShowManagementModal(false)}
//           onProductUpdate={handleProductUpdate}
//         />
//       )} */}
//     </div>
//   );
// };

// export default Products;
