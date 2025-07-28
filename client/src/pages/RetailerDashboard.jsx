import React from "react";
import { useLocation } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const RetailerDashboard = () => {
  const { state } = useLocation();
  const title = state?.title || localStorage.getItem("ownerName") || "User";
  const retailerCards = [
    {
      title: "Browse Products",
      color: "bg-orange-100",
      description: "Manage inventory",
    },
    { title: "My Orders", color: "bg-blue-100", description: "View sales" },
    { title: "Order History", color: "bg-green-100" },
    {
      title: "Profile & Address",
      color: "bg-purple-100",
      description: "Manage customers",
    },
  ];

  return (
    <DashboardLayout title={title} cards={retailerCards}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Retailer Overview</h2>
        {/* Your retailer content */}
      </div>
    </DashboardLayout>
  );
};

export default RetailerDashboard;
