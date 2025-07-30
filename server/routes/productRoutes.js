import express from "express";
import {
  getfmcgAllProducts,
  getelectricalAllProducts,
  getelectronicsAllProducts,
  getclothAllProducts,
  getkitchenAllProducts,
  getluggageAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/fmcg", getfmcgAllProducts);
router.get("/electrical", getelectricalAllProducts);
router.get("/electronics", getelectronicsAllProducts);
router.get("/cloth", getclothAllProducts);
router.get("/kitchen", getkitchenAllProducts);
router.get("/luggage", getluggageAllProducts);

// router.get("/electrical", getAllProducts);

// router.get("/products/category/:category", getProductsByCategory);

export default router;
