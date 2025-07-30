// // server.js
// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// console.log("MONGO_URI:", process.env.MONGO_URI);

// import { connectDB } from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

// const app = express();

// // ✅ Update origin to match your frontend
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.use(express.json({ limit: "10mb" }));
// app.use("/uploads", express.static("uploads"));

// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to B2B Wholesale API</h1>");
// });
// // Routes
// app.use("/api/fmcgproducts", productRoutes);
// app.use("/api/electricalproducts", productRoutes);
// app.use("/api/electronicsproducts", productRoutes);
// app.use("/api/clothproducts", productRoutes);
// app.use("/api/kitchenproducts", productRoutes);
// app.use("/api/luggageproducts", productRoutes);

// connectDB().then(() => {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// });
// new code
// server.js
// import "dotenv/config";
// import express from "express";
// import cors from "cors";
// // console.log("MONGO_URI:", process.env.MONGO_URI);
// console.log("MONGO_URI:", process.env.FRONTEND_URL);

// import { connectDB } from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

// const app = express();

// // ✅ Update CORS configuration to allow multiple origins or use an environment variable
// const allowedOrigins = [
//   "http://localhost:5173", // Local development frontend
//   "http://localhost:3000", // If you use port 3000 locally sometimes
//   process.env.FRONTEND_URL, // Production frontend URL from environment variable
// ].filter(Boolean); // filter(Boolean) removes any undefined/null values

// const corsOptions = {
//   origin: (origin, callback) => {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     } else {
//       const msg = `CORS policy: The origin ${origin} is not allowed.`;
//       return callback(new Error(msg), false);
//     }
//   },
//   credentials: true, // Important if you are sending cookies or authorization headers
// };

// app.use(cors(corsOptions));

// app.use(express.json({ limit: "10mb" }));
// app.use("/uploads", express.static("uploads"));

// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to B2B Wholesale API</h1>");
// });

// // Routes
// app.use("/api/fmcgproducts", productRoutes);
// app.use("/api/electricalproducts", productRoutes);
// app.use("/api/electronicsproducts", productRoutes);
// app.use("/api/clothproducts", productRoutes);
// app.use("/api/kitchenproducts", productRoutes);
// app.use("/api/luggageproducts", productRoutes);

// // Connect to DB and start server
// connectDB().then(() => {
//   const PORT = process.env.PORT || 5000; // ✅ Correctly uses Render's PORT
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     // Optionally log allowed origins for debugging
//     console.log("Allowed CORS origins:", allowedOrigins);
//   });
// });
// new code
// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
// console.log("MONGO_URI:", process.env.MONGO_URI);
// console.log("MONGO_URI:", process.env.FRONTEND_URL); // We'll remove this for now

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// --- HARDCODED CORS CONFIGURATION (Replaces the previous CORS setup) ---
// This explicitly allows your Netlify frontend and local development
const corsOptions = {
  origin: [
    "http://localhost:5173", // Local Vite dev server
    "http://localhost:3000", // If you use other local ports
    "https://wholesalemarket.netlify.app", // Your deployed frontend (Hardcoded)
  ],
  credentials: true, // Keep if you are sending cookies or auth headers
};

// Apply the CORS middleware BEFORE defining any routes
app.use(cors(corsOptions));
// --- END HARDCODED CORS CONFIGURATION ---

app.use(express.json({ limit: "10mb" }));
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to B2B Wholesale API</h1>");
});

// Routes
app.use("/api/fmcgproducts", productRoutes);
app.use("/api/electricalproducts", productRoutes);
app.use("/api/electronicsproducts", productRoutes);
app.use("/api/clothproducts", productRoutes);
app.use("/api/kitchenproducts", productRoutes);
app.use("/api/luggageproducts", productRoutes);

// Connect to DB and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    // You can optionally log the origins again if needed for debugging,
    // but it's not reading from the potentially problematic env var anymore.
    // console.log("Allowed CORS origins (hardcoded):", corsOptions.origin);
  });
});
