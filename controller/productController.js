const Product = require("../model/productModel");

// --- create product controller ---
exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock, img, discount } = req.body;
    const newProduct = new Product({
      name,
      price,
      stock,
      img,
      discount,
    });

    const saveProductToDB = await newProduct.save();
    if (saveProductToDB) {
      res.status(201).json({
        status: true,
        success: "Success",
      });
    }
  } catch (err) {
    console.log("--- Error from createProduct controller ---");
    res.json({
      status: false,
      error: err.message,
      validationError: err._message,
    });
  }
};

// --- get all products controller ---
exports.getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find({});
    if (getAllProducts) {
      res.status(200).json({
        status: true,
        success: "Success",
        data: getAllProducts,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "Product not available...",
      });
    }
  } catch (err) {
    console.log("--- Error from getAllProducts controller ---");
    res.json({
      status: false,
      error: err.message,
    });
  }
};

// --- get single product controller ---
exports.getSingleProduct = async (req, res) => {
  try {
    const productId = req.params?.id;
    const findProduct = await Product.findById(productId).exec();
    if (findProduct) {
      res.status(200).json({
        status: true,
        success: "Success",
        data: findProduct,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "Product not found...",
      });
    }
  } catch (err) {
    console.log("--- Error from getSingleProduct controller ---");
    res.json({
      status: false,
      error: err.message,
    });
  }
};

// --- update product controller ---
exports.updateSingleProduct = async (req, res) => {
  try {
    const productId = req.params?.id;
    const updateData = req.body;
    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      updateData
    );
    if (updateProduct) {
      res.status(200).json({
        status: true,
        success: "Success",
      });
    }
  } catch (err) {
    console.log("--- Error from updateSingleProduct controller ---");
    console.log(err.message);
  }
};

// --- delete product controller ---
exports.deleteSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(productId);
    if (deleteProduct) {
      res.status(200).json({
        status: true,
        success: "Success",
      });
    }
  } catch (err) {
    console.log("--- Error from deleteSingleProduct controller ---");
    console.log(err.message);
  }
};
