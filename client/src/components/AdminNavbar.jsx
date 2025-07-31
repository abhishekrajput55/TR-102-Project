import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate

const AdminNavbar = ({ title }) => {
  const navigate = useNavigate(); // Add this hook

  const handleLogout = () => {
    // Remove all authentication-related data
    const itemsToRemove = ["token", "role", "user", "ownerName"];
    itemsToRemove.forEach((item) => localStorage.removeItem(item));

    // Redirect to auth page
    navigate("/auth");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor shadow-xl z-50">
      <div className="flex flex-wrap items-center justify-between lg:max-w-[90%] w-full mx-auto px-4 md:px-10 lg:px-28 py-2 gap-4">
        {/* Logo */}
        <Link to="/products">
          <img
            src="/assets/indexImg/weblogo-2.png"
            alt="website logo"
            className="h-24"
          />
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-4 text-xl text-themeColor">
          <Link to="/products">
            <i
              className="ri-user-3-line cursor-pointer hover:text-red-500 transition-colors"
              title="User Acount"
            >
              {title}
            </i>
          </Link>

          {/* Logout Icon with click handler */}
          <i
            className="ri-logout-box-line cursor-pointer hover:text-red-500 transition-colors"
            onClick={handleLogout}
            title="Logout"
          >
            Logout
          </i>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
