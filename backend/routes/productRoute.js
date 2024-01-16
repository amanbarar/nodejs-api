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

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

module.exports = router;
