// pages/AdminDashboard.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AdminDashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const title =
    state?.title || localStorage.getItem("ownerName") || "Super Admin";

  const adminCards = [
    {
      title: "All Retailers",
      color: "bg-blue-100",
      description: "Manage users",
    },
    {
      title: "All Sellers",
      color: "bg-green-100",
      description: "Manage users",
    },
    {
      title: "Product Requests",
      color: "bg-purple-100",
      description: "Review pending products",
      onClick: () => navigate("/admin/product-requests"), // 👈 Navigation added
    },
    {
      title: "Products",
      color: "bg-green-100",
      description: "Manage products",
      onClick: () => navigate("/admin/product-manage-and-view"),
    },
    {
      title: "Orders",
      color: "bg-yellow-100",
      description: "View orders",
    },
    {
      title: "Reports",
      color: "bg-purple-100",
      description: "View reports",
    },
  ];

  return (
    <DashboardLayout title={title || "Super Admin"} cards={adminCards}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Admin Overview</h2>
        {/* Your admin content */}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
// new code

// pages/AdminDashboard.jsx
// pages/AdminDashboard.jsx
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DashboardLayout from "../components/DashboardLayout";

// const AdminDashboard = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const title =
//     state?.title || localStorage.getItem("ownerName") || "Super Admin";

//   // State for product management
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [stats, setStats] = useState({
//     totalProducts: 0,
//     totalRetailers: 0,
//     totalSellers: 0,
//     pendingRequests: 0,
//   });

//   // Fetch dashboard data
//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       // Fetch products
//       const productsResponse = await fetch(
//         "http://localhost:5000/api/admin/products",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (productsResponse.ok) {
//         const productsData = await productsResponse.json();
//         setProducts(productsData);
//         setStats((prev) => ({
//           ...prev,
//           totalProducts: productsData.length,
//         }));
//       }

//       // Fetch stats
//       const statsResponse = await fetch(
//         "http://localhost:5000/api/admin/stats",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (statsResponse.ok) {
//         const statsData = await statsResponse.json();
//         setStats(statsData);
//       }
//     } catch (error) {
//       console.error("Error fetching dashboard data:", error);
//       // Fallback to mock data
//       setStats({
//         totalProducts: 150,
//         totalRetailers: 89,
//         totalSellers: 45,
//         pendingRequests: 12,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCardClick = (cardTitle) => {
//     switch (cardTitle) {
//       case "All Retailers":
//         navigate("/admin/retailers");
//         break;
//       case "All Sellers":
//         navigate("/admin/sellers");
//         break;
//       case "Product Request":
//         navigate("/admin/product-requests");
//         break;
//       case "Products":
//         navigate("/admin/products");
//         break;
//       case "Orders":
//         navigate("/admin/orders");
//         break;
//       case "Reports":
//         navigate("/admin/reports");
//         break;
//       default:
//         break;
//     }
//   };

//   // Product management functions
//   const handleAddProduct = () => {
//     navigate("/admin/products/add");
//   };

//   const handleViewProduct = (productId) => {
//     navigate(`/admin/products/${productId}`);
//   };

//   const handleEditProduct = (productId) => {
//     navigate(`/admin/products/edit/${productId}`);
//   };

//   const handleDeleteProduct = async (productId) => {
//     if (
//       window.confirm(
//         "Are you sure you want to delete this product? This action cannot be undone."
//       )
//     ) {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch(
//           `http://localhost:5000/api/admin/products/${productId}`,
//           {
//             method: "DELETE",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.ok) {
//           // Refresh the data
//           fetchDashboardData();
//           alert("Product deleted successfully!");
//         } else {
//           const errorData = await response.json();
//           alert(`Error: ${errorData.error || "Failed to delete product"}`);
//         }
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         alert("Network error: Failed to delete product");
//       }
//     }
//   };

//   const handleToggleProductStatus = async (productId, currentStatus) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         `http://localhost:5000/api/admin/products/${productId}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ isActive: !currentStatus }),
//         }
//       );

//       if (response.ok) {
//         // Refresh the data
//         fetchDashboardData();
//         alert(
//           `Product ${
//             !currentStatus ? "activated" : "deactivated"
//           } successfully!`
//         );
//       } else {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.error || "Failed to update product status"}`);
//       }
//     } catch (error) {
//       console.error("Error updating product status:", error);
//       alert("Network error: Failed to update product status");
//     }
//   };

//   const adminCards = [
//     {
//       title: "All Retailers",
//       color: "bg-blue-100",
//       description: "Manage retailers",
//       onClick: () => handleCardClick("All Retailers"),
//     },
//     {
//       title: "All Sellers",
//       color: "bg-green-100",
//       description: "Manage sellers",
//       onClick: () => handleCardClick("All Sellers"),
//     },
//     {
//       title: "Product Request",
//       color: "bg-purple-100",
//       description: "Manage product requests",
//       onClick: () => handleCardClick("Product Request"),
//     },
//     {
//       title: "Products",
//       color: "bg-yellow-100",
//       description: "Manage products",
//       onClick: () => handleCardClick("Products"),
//     },
//     {
//       title: "Orders",
//       color: "bg-red-100",
//       description: "View orders",
//       onClick: () => handleCardClick("Orders"),
//     },
//     {
//       title: "Reports",
//       color: "bg-indigo-100",
//       description: "View reports",
//       onClick: () => handleCardClick("Reports"),
//     },
//   ];

//   return (
//     <DashboardLayout title={`Welcome, ${title}`} cards={adminCards}>
//       {/* Stats Overview */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-blue-100 mr-4">
//               <i className="ri-shopping-bag-line text-blue-600 text-xl"></i>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Total Products</p>
//               <p className="text-2xl font-bold">{stats.totalProducts || 0}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-green-100 mr-4">
//               <i className="ri-store-line text-green-600 text-xl"></i>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Retailers</p>
//               <p className="text-2xl font-bold">{stats.totalRetailers || 0}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-purple-100 mr-4">
//               <i className="ri-user-line text-purple-600 text-xl"></i>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Sellers</p>
//               <p className="text-2xl font-bold">{stats.totalSellers || 0}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-orange-100 mr-4">
//               <i className="ri-time-line text-orange-600 text-xl"></i>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Pending Requests</p>
//               <p className="text-2xl font-bold">{stats.pendingRequests || 0}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Products Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold">Recent Products</h2>
//           <button
//             onClick={handleAddProduct}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
//           >
//             <i className="ri-add-line"></i>
//             Add Product
//           </button>
//         </div>

//         {loading ? (
//           <div className="text-center py-8">
//             <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//             <p className="mt-2">Loading products...</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Product
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Category
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Price
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Stock
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {products.slice(0, 5).map((product) => (
//                   <tr key={product._id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-10 w-10">
//                           <img
//                             className="h-10 w-10 rounded object-cover"
//                             src={
//                               product.images?.[0] ||
//                               "/assets/default-product.jpg"
//                             }
//                             alt={product.name}
//                             onError={(e) => {
//                               e.target.src = "/assets/default-product.jpg";
//                             }}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">
//                             {product.name}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             {product.brand}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {product.category}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       ₹{product.price?.toLocaleString()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       {product.stock}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           product.isActive
//                             ? "bg-green-100 text-green-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {product.isActive ? "Active" : "Inactive"}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={() => handleViewProduct(product._id)}
//                           className="text-blue-600 hover:text-blue-900"
//                           title="View"
//                         >
//                           <i className="ri-eye-line"></i>
//                         </button>
//                         <button
//                           onClick={() => handleEditProduct(product._id)}
//                           className="text-green-600 hover:text-green-900"
//                           title="Edit"
//                         >
//                           <i className="ri-edit-line"></i>
//                         </button>
//                         <button
//                           onClick={() =>
//                             handleToggleProductStatus(
//                               product._id,
//                               product.isActive
//                             )
//                           }
//                           className={`${
//                             product.isActive
//                               ? "text-yellow-600 hover:text-yellow-900"
//                               : "text-green-600 hover:text-green-900"
//                           }`}
//                           title={product.isActive ? "Deactivate" : "Activate"}
//                         >
//                           <i
//                             className={`ri-${
//                               product.isActive ? "pause" : "play"
//                             }-line`}
//                           ></i>
//                         </button>
//                         <button
//                           onClick={() => handleDeleteProduct(product._id)}
//                           className="text-red-600 hover:text-red-900"
//                           title="Delete"
//                         >
//                           <i className="ri-delete-bin-line"></i>
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {products.length === 0 && (
//               <div className="text-center py-8 text-gray-500">
//                 <i className="ri-shopping-bag-line text-4xl mb-3 block"></i>
//                 <p>No products found.</p>
//                 <button
//                   onClick={handleAddProduct}
//                   className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
//                 >
//                   <i className="ri-add-line"></i> Add your first product
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Quick Actions */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="font-semibold mb-4 flex items-center gap-2">
//             <i className="ri-flashlight-line text-blue-600"></i>
//             Quick Actions
//           </h3>
//           <div className="space-y-3">
//             <button
//               onClick={() => navigate("/admin/products")}
//               className="w-full text-left p-3 rounded hover:bg-gray-50 flex items-center gap-3 transition-colors"
//             >
//               <i className="ri-edit-line text-blue-600"></i>
//               <span>Manage All Products</span>
//             </button>
//             <button
//               onClick={() => navigate("/admin/retailers")}
//               className="w-full text-left p-3 rounded hover:bg-gray-50 flex items-center gap-3 transition-colors"
//             >
//               <i className="ri-user-settings-line text-green-600"></i>
//               <span>Manage Retailers</span>
//             </button>
//             <button
//               onClick={() => navigate("/admin/sellers")}
//               className="w-full text-left p-3 rounded hover:bg-gray-50 flex items-center gap-3 transition-colors"
//             >
//               <i className="ri-user-follow-line text-purple-600"></i>
//               <span>Manage Sellers</span>
//             </button>
//             <button
//               onClick={() => navigate("/admin/product-requests")}
//               className="w-full text-left p-3 rounded hover:bg-gray-50 flex items-center gap-3 transition-colors"
//             >
//               <i className="ri-file-list-line text-orange-600"></i>
//               <span>Product Requests</span>
//             </button>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
//           <h3 className="font-semibold mb-4 flex items-center gap-2">
//             <i className="ri-time-line text-purple-600"></i>
//             Recent Activity
//           </h3>
//           <div className="space-y-4">
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-2 rounded-full mr-3">
//                 <i className="ri-add-circle-line text-blue-600"></i>
//               </div>
//               <div>
//                 <p className="font-medium">New product added</p>
//                 <p className="text-sm text-gray-600">
//                   Premium Headphones - 2 hours ago
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-green-100 p-2 rounded-full mr-3">
//                 <i className="ri-user-add-line text-green-600"></i>
//               </div>
//               <div>
//                 <p className="font-medium">New retailer registered</p>
//                 <p className="text-sm text-gray-600">
//                   Rahul General Store - 1 day ago
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-purple-100 p-2 rounded-full mr-3">
//                 <i className="ri-shopping-cart-line text-purple-600"></i>
//               </div>
//               <div>
//                 <p className="font-medium">New order received</p>
//                 <p className="text-sm text-gray-600">
//                   Order #ORD-001 - 2 days ago
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-orange-100 p-2 rounded-full mr-3">
//                 <i className="ri-edit-line text-orange-600"></i>
//               </div>
//               <div>
//                 <p className="font-medium">Product updated</p>
//                 <p className="text-sm text-gray-600">
//                   Samsung Galaxy S21 - 3 days ago
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminDashboard;
