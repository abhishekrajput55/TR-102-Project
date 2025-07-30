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
export const fmcgProduct = productConnection.model(
  "Product",
  productSchema,
  "fmcg"
);
export const electricalProduct = productConnection.model(
  "Product",
  productSchema,
  "electrical"
);
export const electronicsProduct = productConnection.model(
  "Product",
  productSchema,
  "electronics"
);
export const clothProduct = productConnection.model(
  "Product",
  productSchema,
  "cloth"
);
export const kitchenProduct = productConnection.model(
  "Product",
  productSchema,
  "kitchen"
);
export const luggageProduct = productConnection.model(
  "Product",
  productSchema,
  "luggage"
);