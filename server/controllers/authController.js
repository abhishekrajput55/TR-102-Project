// controllers/authController.js
import { sendWelcomeEmail } from "../utils/email.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { retailerConnection, sellerConnection } from "../config/db.js";
import { adminConnection } from "../config/db.js";
// Import schemas
import RetailerSchema from "../models/Retailer.js";
import SellerSchema from "../models/Seller.js";
import AdminSchema from "../models/Admin.js";
// Create models using specific connections
const Retailer = retailerConnection.model("Retailer", RetailerSchema);
const Seller = sellerConnection.model("Seller", SellerSchema);
const AdminModel = adminConnection.model("Admin", AdminSchema, "admins");
// Register User
export const registerUser = async (req, res) => {
  const { companyName, ownerName, mobile, email, password, role } = req.body;

  try {
    // Check if user already exists
    let existingUser;
    if (role === "Retailer") {
      existingUser = await Retailer.findOne({ mobile });
    } else if (role === "Seller") {
      existingUser = await Seller.findOne({ mobile });
    } else {
      return res.status(400).json({ error: "Invalid role" });
    }

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists with this mobile number." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Document path (from multer upload)
    const documentPath = req.file ? `/uploads/${req.file.filename}` : "";

    // Create new user
    let newUser;
    if (role === "Retailer") {
      newUser = new Retailer({
        companyName,
        ownerName,
        mobile,
        email,
        password: hashedPassword,
        document: documentPath,
      });
    } else if (role === "Seller") {
      newUser = new Seller({
        companyName,
        ownerName,
        mobile,
        email,
        password: hashedPassword,
        document: documentPath,
      });
    }

    await newUser.save();
    await sendWelcomeEmail(email, ownerName, role);

    res.status(201).json({
      message: `${role} registered successfully!`,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { mobile, password, role } = req.body;

  try {
    let user;
    if (role === "Retailer") {
      user = await Retailer.findOne({ mobile });
    } else if (role === "Seller") {
      user = await Seller.findOne({ mobile });
    } else if (role === "Admin") {
      user = await AdminModel.findOne({ mobile });
    } else {
      return res.status(400).json({ error: "Invalid role" });
    }

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, mobile: user.mobile, role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      role,
      ownerName: user.ownerName,
      message: "Login successful!",
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error during login." });
  }
};
