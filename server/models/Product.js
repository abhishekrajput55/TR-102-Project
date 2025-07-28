import mongoose from "mongoose";
import { productConnection } from "../config/db.js"; // ✅ CORRECT
// adjust path as needed

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    images: {
      type: [String],
      required: true,
      validate: [(arr) => arr.length > 0, "At least one image required"],
    },
  },
  { timestamps: true }
);

// Export the model using productConnection
export const Product = productConnection.model(
  "Product",
  productSchema,
  "fmcg"
);
