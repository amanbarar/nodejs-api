const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Product = require("./models/productModel");

app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.get("/blog", (req, res) => {
  res.send("This is blog section");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@nodeapi.vndlkhk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Databases connected: MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
