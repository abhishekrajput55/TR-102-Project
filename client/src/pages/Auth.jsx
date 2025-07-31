import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Retailer");
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    mobile: "",
    email: "",
    password: "",
    document: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleMobileChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return false;
    }

    if (!isLogin && role !== "Admin") {
      if (!formData.companyName) {
        setError("Company/Shop name is required");
        return false;
      }
      if (!formData.ownerName) {
        setError("Owner name is required");
        return false;
      }
      if (!formData.document) {
        setError("Document is required");
        return false;
      }
    }

    if (!formData.password) {
      setError("Password is required");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");

    let body;
    let headers = {};

    if (isLogin) {
      // 🔐 LOGIN: Send as JSON
      body = JSON.stringify({
        mobile: formData.mobile,
        password: formData.password,
        role: role,
      });
      headers["Content-Type"] = "application/json"; // ← Important
    } else {
      // 📤 REGISTER: Send as FormData (for file upload)
      body = new FormData();
      if (role !== "Admin") {
        body.append("companyName", formData.companyName);
        body.append("ownerName", formData.ownerName);
        body.append("email", formData.email);
        body.append("document", formData.document);
      }
      body.append("mobile", formData.mobile);
      body.append("password", formData.password);
      body.append("role", role);
      // No Content-Type — browser sets it automatically with boundary
    }

    const url = isLogin
      ? "https://tr-102-project.onrender.com/api/auth/login"
      : "https://tr-102-project.onrender.com/api/auth/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers, // Only for JSON
        body: body,
      });

      const data = await response.json();

      if (response.ok) {
        const { token, role, ownerName } = data;

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          localStorage.setItem("ownerName", ownerName); // ✅ Save name here
          toast.success(data.message || "Success!");
        }

        // 🔁 Smart redirection based on mode (login vs register)
        if (isLogin) {
          // User is logging in → go to dashboard
          if (role === "Retailer") {
            navigate("/products");
          } else if (role === "Seller") {
            navigate("/sellerDashboard");
          } else if (role === "Admin") {
            navigate("/adminDashboard");
          }
        } else {
          // User just registered → go back to login
          toast.info("Please login to continue.");
          setIsLogin(true); // Switch to login mode
          setFormData({
            ...formData,
            password: "", // Clear password
          });
        }
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (err) {
      // 🔥 Now you'll see the real error
      console.error("Fetch error:", err);
      toast.error("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Reset form when switching between login/register
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  // Reset form when changing role
  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setRole(newRole);
    if (newRole === "Admin") {
      setIsLogin(true); // Force login mode for Admin
    }
    setError("");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <div className="absolute top-0 left-0 w-full h-full rotate-180 -z-10">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 940 240"
          preserveAspectRatio="none"
        >
          <path
            fill="#0F172A"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,96C672,75,768,85,864,117.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160V0H0Z"
          />
        </svg>
      </div>

      <div className="w-full max-w-md shadow-xl rounded-lg border bg-bgColor">
        <div className="p-5 bg-themeColor rounded-t-lg">
          <Link to="/">
            <p className="mb-4 cursor-pointer hover:underline text-bgColor">
              <i className="ri-arrow-left-line font-bold ml-1"></i>Home
            </p>
          </Link>
          <h2 className="text-3xl font-bold text-center text-bgColor mb-6 capitalize">
            {role === "Admin" ? "Admin Login" : isLogin ? "Login" : "Register"}{" "}
            as {role}
          </h2>

          {/* Role Selector */}
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full border border-gray-300 p-2 rounded mb-4 text-gray-800"
          >
            <option value="Retailer">Retailer</option>
            <option value="Seller">Seller</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Only show these fields if NOT login and NOT Admin */}
            {!isLogin && role !== "Admin" && (
              <>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company / Shop Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
                <input
                  type="text"
                  name="ownerName"
                  placeholder="Address"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
                <input
                  type="file"
                  name="document"
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
                {/* Email Field - shown in all cases */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
                  required
                />
              </>
            )}

            {/* Mobile field - shown in all cases */}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number (10 digits)"
              value={formData.mobile}
              onChange={handleMobileChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
              required
            />

            {/* Password field - shown in all cases */}
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-themeColor"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 font-semibold group bg-bgColor text-themeColor border rounded-sm overflow-hidden disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-themeColor mr-2"></span>
                  Processing...
                </span>
              ) : (
                <>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
                  {isLogin ? "Login" : "Register Now"}
                  <i className="ri-arrow-right-line font-bold ml-1"></i>
                </>
              )}
            </button>
          </form>

          {/* Toggle Login/Register - Hidden for Admin */}
          {role !== "Admin" && (
            <p className="text-center mt-6 text-sm">
              {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
              <button
                onClick={toggleAuthMode}
                className="text-blue-600 hover:underline font-medium"
                disabled={loading}
              >
                {isLogin ? "Register here" : "Login here"}
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
