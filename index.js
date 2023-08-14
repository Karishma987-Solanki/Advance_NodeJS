const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = require("./Models/product");
require("dotenv").config();

const app = express();
const port = 3000;

const mongodbUrl = process.env.MONGODB_URL || "";

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/add-product", async (req, res) => {
  try {
    const newProduct = req.body;
    const prod = new Product({
      product_id: newProduct.product_id,
      title: newProduct.title,
      description: newProduct.description,
      price: newProduct.price,
      image: newProduct.image,
    });
    await prod.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failure" });
  }
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
