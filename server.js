const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.get("/blog", (req, res) => {
  res.send("This is blog section");
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
