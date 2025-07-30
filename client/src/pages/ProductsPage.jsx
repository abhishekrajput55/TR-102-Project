// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const ProductsPage = () => {
  const navigate = useNavigate();

  // State for products in each category
  const [fmcgProducts, setFmcgProducts] = useState([]);
  const [electricalProducts, setElectricalProducts] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [clothProducts, setClothProducts] = useState([]);
  const [homeKitchenProducts, setHomeKitchenProducts] = useState([]);
  const [luggageProducts, setLuggageProducts] = useState([]);

  // Loading states for each category
  const [loadingStates, setLoadingStates] = useState({
    fmcg: true,
    electrical: true,
    electronics: true,
    cloth: true,
    homeKitchen: true,
    luggage: true,
  });

  // Stats state (you might calculate these based on fetched data)
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    inactiveProducts: 0,
    categories: 6,
  });

  // Fetch data for each category
  useEffect(() => {
    const fetchFmcgProducts = async () => {
      try {
        const res = await axios.get(
          "https://tr-102-project.onrender.com/api/fmcgproducts/fmcg",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Add auth if needed
            },
          }
        );
        setFmcgProducts(res.data);
        // Update stats if needed based on res.data
      } catch (err) {
        console.error("Failed to fetch FMCG products", err);
        setFmcgProducts([]); // Set to empty array on error
      } finally {
        setLoadingStates((prev) => ({ ...prev, fmcg: false }));
      }
    };

    const fetchElectricalProducts = async () => {
      try {
        const res = await axios.get(
          "https://tr-102-project.onrender.com/api/electricalproducts/electrical",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setElectricalProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch Electrical products", err);
        setElectricalProducts([]);
      } finally {
        setLoadingStates((prev) => ({ ...prev, electrical: false }));
      }
    };

    const fetchElectronicsProducts = async () => {
      try {
        const res = await axios.get(
          "https://tr-102-project.onrender.com/api/electronicsproducts/electronics",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setElectronicsProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch Electronics products", err);
        setElectronicsProducts([]);
      } finally {
        setLoadingStates((prev) => ({ ...prev, electronics: false }));
      }
    };

    const fetchClothProducts = async () => {
      try {
        const res = await axios.get(
          "https://tr-102-project.onrender.com/api/clothproducts/cloth",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setClothProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch Cloth products", err);
        setClothProducts([]);
      } finally {
        setLoadingStates((prev) => ({ ...prev, cloth: false }));
      }
    };

    const fetchHomeKitchenProducts = async () => {
      try {
        const res = await axios.get(
          "https://tr-102-project.onrender.com/api/kitchenproducts/kitchen",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setHomeKitchenProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch Home & Kitchen products", err);
        setHomeKitchenProducts([]);
      } finally {
        setLoadingStates((prev) => ({ ...prev, homeKitchen: false }));
      }
    };

    const fetchLuggageProducts = async () => {
      try {
        const res = await axios.get(
          "https://tr-102-project.onrender.com/api/luggageproducts/luggage",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setLuggageProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch Luggage products", err);
        setLuggageProducts([]);
      } finally {
        setLoadingStates((prev) => ({ ...prev, luggage: false }));
      }
    };

    // Call all fetch functions
    fetchFmcgProducts();
    fetchElectricalProducts();
    fetchElectronicsProducts();
    fetchClothProducts();
    fetchHomeKitchenProducts();
    fetchLuggageProducts();

    // Optional: Recalculate overall stats after fetching (simplified example)
    // This would ideally be done after all data is fetched
    // For now, we'll leave stats as initial mock values or calculate them differently
    // You might need a more robust way to wait for all fetches if stats are critical here
  }, []); // Empty dependency array means this runs once on mount

  // Placeholder functions for actions (implement based on your needs)
  const handleAddProduct = () => {
    navigate("/admin/product-requests");
  };

  const handleViewProduct = (productId) => {
    navigate(`/admin/products/${productId}`);
  };

  const handleEditProduct = (productId) => {
    navigate(`/admin/products/edit/${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    console.log(`Delete product clicked for ID: ${productId}`);
    // Implement delete logic (e.g., show confirmation, call API)
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      // Call your delete API endpoint here
      // Example:
      /*
        axios.delete(`http://localhost:5000/api/admin/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then(response => {
             console.log("Product deleted");
             // You would then need to refetch the data for the relevant category
             // or optimistically update the state.
             // fetchFmcgProducts(); // Example for FMCG, you'd need logic to know which category
        })
        .catch(error => {
             console.error("Error deleting product:", error);
             alert("Failed to delete product.");
        });
        */
    }
  };

  const handleToggleStatus = (productId) => {
    console.log(`Toggle status clicked for ID: ${productId}`);
    // Implement status toggle logic (e.g., call API)
    // Example:
    /*
        axios.put(`http://localhost:5000/api/admin/products/${productId}/toggle-status`, {}, { // Or PUT with { isActive: !currentValue }
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then(response => {
             console.log("Product status updated");
             // Refetch data or update state
        })
        .catch(error => {
             console.error("Error updating product status:", error);
             alert("Failed to update product status.");
        });
        */
  };

  // side bar card data for the layout, adjust as needed
  const dummyCards = [
    {
      title: "Dashboard",
      color: "bg-blue-100",
      onClick: () => navigate("/adminDashboard"),
    },
    {
      title: "Retailers",
      color: "bg-green-100",
      onClick: () => navigate("/admin/retailers"),
    },
    {
      title: "Sellers",
      color: "bg-purple-100",
      onClick: () => navigate("/admin/sellers"),
    },
    {
      title: "Product Requests",
      color: "bg-green-100",
      onClick: () => navigate("/admin/product-requests"),
    },
    {
      title: "Orders",
      color: "bg-yellow-100",
      onClick: () => navigate("/admin/orders"),
    },
    {
      title: "Reports",
      color: "bg-purple-100",
      onClick: () => navigate("/admin/reports"),
    },
  ];

  // Data structure to map categories to state and loading
  const categoriesData = [
    {
      name: "FMCG Product",
      icon: "ri-box-3-line",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      products: fmcgProducts,
      loading: loadingStates.fmcg,
    },
    {
      name: "Electrical",
      icon: "ri-plug-line",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      products: electricalProducts,
      loading: loadingStates.electrical,
    },
    {
      name: "Electronics",
      icon: "ri-computer-line",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      products: electronicsProducts,
      loading: loadingStates.electronics,
    },
    {
      name: "Cloth",
      icon: "ri-t-shirt-line",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      products: clothProducts,
      loading: loadingStates.cloth,
    },
    {
      name: "Home and Kitchen",
      icon: "ri-home-6-line",
      color: "bg-green-100",
      iconColor: "text-green-600",
      products: homeKitchenProducts,
      loading: loadingStates.homeKitchen,
    },
    {
      name: "Luggages",
      icon: "ri-suitcase-line",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      products: luggageProducts,
      loading: loadingStates.luggage,
    },
  ];

  return (
    <DashboardLayout title="Products Management" cards={dummyCards}>
      {/* Stats Overview - You might want to calculate these properly  */}
      {/* For now, using mock values or calculating simply */}
      {/* Uncomment this section when stats calculation is implemented */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <i className="ri-shopping-bag-line text-blue-600 text-xl"></i>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-2xl font-bold">
                {fmcgProducts.length +
                  electricalProducts.length +
                  electronicsProducts.length +
                  clothProducts.length +
                  homeKitchenProducts.length +
                  luggageProducts.length}
                {/* Or use a derived state variable */}
                {/* {totalProducts}*/}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <i className="ri-folder-line text-purple-600 text-xl"></i>
            </div>
            <div>
              <p className="text-sm text-gray-600">Categories</p>
              <p className="text-2xl font-bold">{categoriesData.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products by Category */}
      <div className="space-y-8">
        {categoriesData.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className={`flex items-center justify-between p-4 ${category.color}`}
            >
              <div className="flex items-center space-x-3">
                <i
                  className={`${category.icon} ${category.iconColor} text-xl`}
                ></i>
                <h2 className="text-xl font-bold text-gray-800">
                  {category.name}
                </h2>
                <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {category.products.length} items
                </span>
              </div>
              <button
                onClick={handleAddProduct} // You might pass category name to pre-select
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex items-center"
              >
                <i className="ri-add-line mr-1"></i> Add
              </button>
            </div>
            <div className="overflow-x-auto">
              {category.loading ? (
                <div className="text-center py-6">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <p className="mt-2 text-sm text-gray-600">
                    Loading {category.name} products...
                  </p>
                </div>
              ) : category.products.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th> */}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.products.map((product) => (
                      <tr key={product._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center w-80 ">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded object-cover"
                                src={
                                  product.images?.[0] ||
                                  "/assets/default-product.jpg"
                                }
                                alt={product.name}
                                onError={(e) => {
                                  e.target.src = "/assets/default-product.jpg";
                                }}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm text-wrap font-medium text-gray-900">
                                {product.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {product.brand || "N/A"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.price !== undefined
                            ? `₹${product.price.toLocaleString()}`
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.stock !== undefined ? product.stock : "N/A"}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              product.isActive !== undefined && product.isActive
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.isActive !== undefined && product.isActive
                              ? "Active"
                              : "Inactive"}
                          </span>
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleViewProduct(product._id)}
                              className="text-blue-600 hover:text-blue-900"
                              title="View"
                            >
                              <i className="ri-eye-line"></i>
                            </button>
                            <button
                              onClick={() => handleEditProduct(product._id)}
                              className="text-green-600 hover:text-green-900"
                              title="Edit"
                            >
                              <i className="ri-edit-line"></i>
                            </button>
                            <button
                              onClick={() => handleToggleStatus(product._id)} // Pass current status if needed
                              className={`${
                                product.isActive !== undefined &&
                                product.isActive
                                  ? "text-yellow-600 hover:text-yellow-900"
                                  : "text-green-600 hover:text-green-900"
                              }`}
                              title={
                                product.isActive !== undefined &&
                                product.isActive
                                  ? "Deactivate"
                                  : "Activate"
                              }
                            >
                              <i
                                className={`ri-${
                                  product.isActive !== undefined &&
                                  product.isActive
                                    ? "pause"
                                    : "play"
                                }-line`}
                              ></i>
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product._id)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <i className="ri-inbox-line text-2xl mb-2 block"></i>
                  <p>No products found in {category.name}.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={handleAddProduct}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
        title="Add New Product"
      >
        <i className="ri-add-line text-xl"></i>
      </button>
    </DashboardLayout>
  );
};

export default ProductsPage;
