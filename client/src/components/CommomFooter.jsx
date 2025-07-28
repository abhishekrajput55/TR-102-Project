import React from "react";
import { Link, useLocation } from "react-router-dom";

const CommomFooter = () => {
  const location = useLocation();
  const hideAuthLinks = ["/products", "/dashboard"].includes(location.pathname);

  return (
    <footer className="text-bgColor bg-liteblack w-full pt-10 px-6 mt-10 rounded-t-lg">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-themeColor py-5 px-4 rounded">
        <p className="text-sm sm:text-base font-medium text-center md:text-left mb-3 md:mb-0">
          Get connected with us on social networks:
        </p>
        <div className="flex gap-4 text-2xl">
          <a href="#">
            <i className="ri-facebook-circle-fill" />
          </a>
          <a href="#">
            <i className="ri-instagram-line" />
          </a>
          <a href="#">
            <i className="ri-twitter-x-line" />
          </a>
          <a href="#">
            <i className="ri-linkedin-box-fill" />
          </a>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div>
          <h2 className="text-lg font-bold text-themeColor mb-3">
            Wholesale B2B Market
          </h2>
          <p className="text-gray-200 leading-relaxed">
            We are committed to providing comprehensive B2B services that
            empower businesses to thrive and succeed in today's competitive
            marketplace.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-themeColor">
            Products
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/fmcg" className="hover:underline">
                FOOD & FMCG
              </Link>
            </li>
            <li>
              <Link to="/clothing" className="hover:underline">
                Clothing & Accessories
              </Link>
            </li>
            <li>
              <Link to="/electronics" className="hover:underline">
                Electronics & Appliances
              </Link>
            </li>
            <li>
              <Link to="/electrical" className="hover:underline">
                Electrical
              </Link>
            </li>
            <li>
              <Link to="/home-kitchen" className="hover:underline">
                Home & Kitchen
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-themeColor">
            Useful Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            {!hideAuthLinks && (
              <>
                <li>
                  <Link to="/Auth" className="hover:underline">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/Auth" className="hover:underline">
                    Login
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-themeColor">
            Contact
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <i className="ri-map-pin-line text-lg" />
              Ldh-141008, Punjab
            </li>

            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-lg" />
              wholesaleb2bmarket2@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-lg" />
              +91 75290-36258
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-lg" />
              +91 75290-36228
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 py-4 border-t border-gray-300 text-gray-400">
        © {new Date().getFullYear()} Copyright:{" "}
        <Link to="/" className="hover:underline text-themeColor font-medium">
          wholesaleb2bmarket.com
        </Link>
      </div>
    </footer>
  );
};

export default CommomFooter;
