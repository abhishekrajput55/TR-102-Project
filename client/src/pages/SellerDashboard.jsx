// import React from "react";
// import { useLocation } from "react-router-dom";

// import DashboardLayout from "../components/DashboardLayout";

// const SellerDashboard = () => {
//   const { state } = useLocation();
//   const title = state?.title || localStorage.getItem("ownerName") || "User";
//   const cards = [
//     { title: "Add New Product", color: "bg-green-100" },
//     { title: "My Products", color: "bg-blue-100" },
//     { title: "Pending Approvals", color: "bg-yellow-100" },
//     { title: "My Orders", color: "bg-purple-100" },
//   ];

//   return (
//     <DashboardLayout title={title}>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-28">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className={`rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer ${card.color}`}
//           >
//             <h2 className="text-lg font-semibold text-gray-800">
//               {card.title}
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">
//               Click to manage {card.title.toLowerCase()}.
//             </p>
//           </div>
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default SellerDashboard;

// pages/SellerDashboard.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import DashboardLayout from "../components/DashboardLayout";

const SellerDashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Add this hook
  const title = state?.title || localStorage.getItem("ownerName") || "User";

  const handleCardClick = (cardTitle) => {
    switch (cardTitle) {
      case "Add New Product":
        navigate("/seller/add-product");
        break;
      case "My Products":
        // You can create this page later
        alert("My Products page coming soon!");
        break;
      case "Pending Approvals":
        // You can create this page later
        alert("Pending Approvals page coming soon!");
        break;
      case "My Orders":
        // You can create this page later
        alert("My Orders page coming soon!");
        break;
      default:
        break;
    }
  };

  const cards = [
    {
      title: "Add New Product",
      color: "bg-green-100",
      onClick: () => handleCardClick("Add New Product"),
    },
    {
      title: "My Products",
      color: "bg-blue-100",
      onClick: () => handleCardClick("My Products"),
    },
    {
      title: "Pending Approvals",
      color: "bg-yellow-100",
      onClick: () => handleCardClick("Pending Approvals"),
    },
    {
      title: "My Orders",
      color: "bg-purple-100",
      onClick: () => handleCardClick("My Orders"),
    },
  ];

  return (
    <DashboardLayout title={title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer ${card.color}`}
            onClick={card.onClick} // Add onClick handler
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Click to manage {card.title.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default SellerDashboard;
