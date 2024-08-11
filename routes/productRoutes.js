const express = require("express");
const {
  getAllProducts,
  createProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} = require("../controller/productController");
const productRouter = express.Router();

productRouter
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getSingleProduct)
  .patch("/:id", updateSingleProduct)
  .delete("/:id", deleteSingleProduct);

module.exports = productRouter;
