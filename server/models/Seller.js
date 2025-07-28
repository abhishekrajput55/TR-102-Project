// models/Seller.js
import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    document: String,
  },
  {
    timestamps: true,
  }
);

// Export the SCHEMA object, NOT the model
export default sellerSchema; // CHANGED: Only export the schema
// DO NOT: export default mongoose.model('Seller', sellerSchema);
