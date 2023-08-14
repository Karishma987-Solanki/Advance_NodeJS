const express = require("express");
const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../Controllers/product");

const router = express();

router.post("/add-product", addProduct);
router.get("/get-products", getProducts);
router.put("/update-product", updateProduct);
router.delete("/delete-product", deleteProduct);

module.exports = router;
