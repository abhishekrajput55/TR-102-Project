import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import DashboardLayout from "../components/DashboardLayout";

const SellerDashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Add this hook
  const title = state?.title || localStorage.getItem("ownerName") || "User";

  const cards = [
    {
      title: "Add New Product",
      color: "bg-green-100",
      onClick: () => navigate("/admin/product-manage-and-view"),
    },
    {
      title: "My Products",
      color: "bg-blue-100",
      onClick: () => navigate("/admin/product-manage-and-view"),
    },
    {
      title: "Pending Approvals",
      color: "bg-yellow-100",
      onClick: () => navigate("/admin/product-manage-and-view"),
    },
    {
      title: "My Orders",
      color: "bg-purple-100",
      onClick: () => navigate("/admin/product-manage-and-view"),
    },
  ];

  return (
    <DashboardLayout title={title} cards={cards}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Seller Overview</h2>
        {/* Your retailer content */}
      </div>
    </DashboardLayout>
  );
};

export default SellerDashboard;
