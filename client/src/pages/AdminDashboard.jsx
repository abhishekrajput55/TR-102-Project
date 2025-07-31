// pages/AdminDashboard.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const AdminDashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const title = state?.title || localStorage.getItem("role") || "Super Admin";

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
