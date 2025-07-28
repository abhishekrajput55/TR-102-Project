// db.js
import mongoose from "mongoose";

// Main connection (just to initialize)
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Main MongoDB connection established");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Separate connections for each database
const retailerUri = process.env.MONGO_URI.replace(
  /\/[^\/]+(\?|$)/,
  "/retailerdb$1"
);
const productUri = process.env.MONGO_URI.replace(
  /\/[^\/]+(\?|$)/,
  "/productdb$1"
);
const sellerUri = process.env.MONGO_URI.replace(
  /\/[^\/]+(\?|$)/,
  "/sellerdb$1"
);
const adminUri = process.env.MONGO_URI.replace(/\/[^\/]+(\?|$)/, "/admindb$1");
export const productConnection = mongoose.createConnection(productUri);
export const retailerConnection = mongoose.createConnection(retailerUri);
export const sellerConnection = mongoose.createConnection(sellerUri);
export const adminConnection = mongoose.createConnection(adminUri);
