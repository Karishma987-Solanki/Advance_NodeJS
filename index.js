const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./Views/product");

const app = express();
const port = 3000;

const mongodbUrl = process.env.MONGODB_URL || "";

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", productRoutes);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
