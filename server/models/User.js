const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    companyName: { type: String },
    ownerName: { type: String },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Retailer", "Seller", "Admin"],
      default: "Retailer",
    },
    document: { type: String },
  },
  {
    timestamps: true, // Optional: adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("User", UserSchema);
// dawn spfn kpgc aedn
