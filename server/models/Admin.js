// models/Admin.js
import { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "Admin" },
    mobile: { type: String, required: true },
  },
  { timestamps: true }
);

export default adminSchema;
