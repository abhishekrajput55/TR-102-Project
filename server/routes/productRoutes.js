import express from "express";
import {
  getAllProducts,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/fmcg", getAllProducts);
router.get("/products/category/:category", getProductsByCategory);

export default router;
