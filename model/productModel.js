const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name required.."],
  },
  price: {
    type: Number,
    required: [true, "Price required.."],
  },
  stock: {
    type: String,
    required: [true, "Product stock amount required.."],
  },
  img: {
    type: String,
    required: [true, "Product image required.."],
  },
  discount: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
