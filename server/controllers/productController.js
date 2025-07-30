import {
  fmcgProduct,
  electricalProduct,
  electronicsProduct,
  clothProduct,
  kitchenProduct,
  luggageProduct
} from "../models/Product.js";

export const getfmcgAllProducts = async (req, res) => {
  try {
    const fmcgproducts = await fmcgProduct.find(); // fetch all
    res.status(200).json(fmcgproducts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getelectricalAllProducts = async (req, res) => {
  try {
    const electricalproducts = await electricalProduct.find(); // fetch all
    res.status(200).json(electricalproducts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getelectronicsAllProducts = async (req, res) => {
  try {
    const electronicsproducts = await electronicsProduct.find(); // fetch all
    res.status(200).json(electronicsproducts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getclothAllProducts = async (req, res) => {
  try {
    const clothproducts = await clothProduct.find(); // fetch all
    res.status(200).json(clothproducts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getkitchenAllProducts = async (req, res) => {
  try {
    const kitchenproducts = await kitchenProduct.find(); // fetch all
    res.status(200).json(kitchenproducts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getluggageAllProducts = async (req, res) => {
  try {
    const luggageproducts = await luggageProduct.find(); // fetch all
    res.status(200).json(luggageproducts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};