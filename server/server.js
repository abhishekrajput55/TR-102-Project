// server.js
import "dotenv/config";
import express from "express";
import cors from "cors"; // Make sure this is installed: npm install cors
console.log("MONGO_URI:", process.env.MONGO_URI);

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// ✅ Update origin to match your frontend
app.use(
  cors({
    origin: "http://localhost:5173", // ← Changed from 3000 to 5173
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to B2B Wholesale API</h1>");
});
// Routes
app.use("/api/products", productRoutes);

connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
