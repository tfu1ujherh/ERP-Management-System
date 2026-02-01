const Product = require("../models/Product");

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
