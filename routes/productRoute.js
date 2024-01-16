const express = require("express");

const Product = require("../models/productModel");
const {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");
const router = express.Router();

router.get("/products", getProducts);

router.get("/products/:id", getProductById);

router.post("/product", createProduct);

router.put("/products/:id", updateProductById);

router.delete("/products/:id", deleteProductById);

module.exports = router;
