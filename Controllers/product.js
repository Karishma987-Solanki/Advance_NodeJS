const Product = require("../Models/product");

const addProduct = async (req, res) => {
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
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({ message: "success", products });
  } catch (error) {
    res.status(500).json({ message: "failure" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const product = req.body;
    await Product.updateOne(
      { _id: id },
      {
        $set: {
          product_id: product.product_id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failure" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.query;
    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failure" });
  }
};

module.exports = { addProduct, getProducts, updateProduct, deleteProduct };
