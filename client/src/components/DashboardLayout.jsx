// import React, { useState } from "react";
// import AdminNavbar from "./AdminNavbar";

// const DashboardLayout = ({ title, children, cards = [] }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 mt-32">
//       <AdminNavbar title={title} />

//       <header className="bg-white shadow p-4 mb-4">
//         <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
//       </header>

//       <div className="px-4 sm:px-6 lg:px-8">
//         {/* Mobile Menu Button - Full width on mobile */}
//         {cards && cards.length > 0 && (
//           <div className="md:hidden mb-6">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md"
//             >
//               <span className="font-medium text-gray-800">Menu</span>
//               <svg
//                 className={`w-5 h-5 transition-transform ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>

//             {/* Mobile Menu Dropdown - Full width below button */}
//             {isMobileMenuOpen && (
//               <div className="mt-2 bg-white rounded-lg shadow-md p-4">
//                 <nav className="space-y-2">
//                   {cards.map((card, idx) => (
//                     <div
//                       key={idx}
//                       className={`rounded-lg p-3 transition duration-300 cursor-pointer ${
//                         card.color || "bg-gray-100"
//                       }`}
//                       onClick={() => {
//                         card.onClick && card.onClick();
//                         setIsMobileMenuOpen(false); // Close menu after selection
//                       }}
//                     >
//                       <span className="font-medium text-gray-800">
//                         {card.title}
//                       </span>
//                     </div>
//                   ))}
//                 </nav>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Flex container for desktop - only show when not mobile menu */}
//         <div className="hidden md:flex">
//           {cards && cards.length > 0 && (
//             <>
//               {/* Desktop Sidebar */}
//               <aside className="w-64 bg-white rounded-lg shadow-md h-fit mr-6 flex-shrink-0">
//                 <div className="p-6">
//                   <h2 className="text-lg font-bold text-gray-800 mb-4">
//                     Navigation
//                   </h2>
//                   <nav className="space-y-3">
//                     {cards.map((card, idx) => (
//                       <div
//                         key={idx}
//                         className={`rounded-lg p-4 transition duration-300 cursor-pointer hover:shadow-md ${
//                           card.color || "bg-gray-100"
//                         } hover:translate-x-1`}
//                         onClick={() => card.onClick && card.onClick()}
//                       >
//                         <div className="flex items-center">
//                           <span className="font-medium text-gray-800">
//                             {card.title}
//                           </span>
//                         </div>
//                         {card.description && (
//                           <p className="text-xs text-gray-600 mt-1">
//                             {card.description}
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </nav>
//                 </div>
//               </aside>
//             </>
//           )}

//           {/* Main Content */}
//           <main className="flex-1">{children}</main>
//         </div>

//         {/* Mobile Content - Show when no sidebar or mobile view */}
//         <div className="md:hidden">
//           <main>{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
// new code

// components/DashboardLayout.jsx
import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const DashboardLayout = ({ title, children, cards = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 mt-32">
      {/* Remove mt-32 from here and add it to AdminNavbar if needed */}
      <AdminNavbar title={title} />

      <header className="bg-white shadow p-4 mb-4 mt-16">
        {" "}
        {/* Add margin-top here instead */}
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </header>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        {cards && cards.length > 0 && (
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md"
            >
              <span className="font-medium text-gray-800">Menu</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileMenuOpen && (
              <div className="mt-2 bg-white rounded-lg shadow-md p-4">
                <nav className="space-y-2">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className={`rounded-lg p-3 transition duration-300 cursor-pointer ${
                        card.color || "bg-gray-100"
                      }`}
                      onClick={() => {
                        card.onClick && card.onClick();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span className="font-medium text-gray-800">
                        {card.title}
                      </span>
                      {card.description && (
                        <p className="text-xs text-gray-600 mt-1">
                          {card.description}
                        </p>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            )}
          </div>
        )}

        {/* Desktop Layout */}
        <div className="hidden md:flex">
          {cards && cards.length > 0 && (
            <aside className="w-64 bg-white rounded-lg shadow-md h-fit mr-6 flex-shrink-0 sticky top-20">
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Navigation
                </h2>
                <nav className="space-y-3">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className={`rounded-lg p-4 transition duration-300 cursor-pointer hover:shadow-md ${
                        card.color || "bg-gray-100"
                      } hover:translate-x-1`}
                      onClick={() => card.onClick && card.onClick()}
                    >
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">
                          {card.title}
                        </span>
                      </div>
                      {card.description && (
                        <p className="text-xs text-gray-600 mt-1">
                          {card.description}
                        </p>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          <main className="flex-1">{children}</main>
        </div>

        {/* Mobile Content */}
        <div className="md:hidden">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
