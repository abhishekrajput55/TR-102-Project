// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
console.log("MONGO_URI:", process.env.MONGO_URI);

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// ✅ Update origin to match your frontend
app.use(
  cors({
    origin: "http://localhost:5173",
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
app.use("/api/fmcgproducts", productRoutes);
app.use("/api/electricalproducts", productRoutes);
app.use("/api/electronicsproducts", productRoutes);
app.use("/api/clothproducts", productRoutes);
app.use("/api/kitchenproducts", productRoutes);
app.use("/api/luggageproducts", productRoutes);


connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
