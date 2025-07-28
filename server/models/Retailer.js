// models/Retailer.js
import mongoose from "mongoose"; // Optional style: import full mongoose, or keep { Schema }

const retailerSchema = new mongoose.Schema(
  {
    // Use mongoose.Schema or just Schema if you imported it
    companyName: { type: String, required: true },
    ownerName: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    email: { type: String }, // Consider adding required: true if needed
    password: { type: String, required: true },
    document: { type: String },
  },
  { timestamps: true }
);

export default retailerSchema; // This is correct
