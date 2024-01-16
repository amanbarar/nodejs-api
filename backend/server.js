const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const productRoute = require("./routes/productRoute");
const { errorMiddleware } = require("./middlewares/errorMiddleware");

app.use(express.json());
var corsOptions = {
    origin: "http://localhost:5173",
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Databases connected: MongoDB");
        app.listen(PORT, () => {
            console.log(`Node API app is running on ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Hello Node API");
});

app.get("/blog", (req, res) => {
    res.send("This is blog section");
});

app.use(errorMiddleware);
