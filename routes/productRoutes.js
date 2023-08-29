const express = require("express");
const {
  productsGetAll,
  productGetWithId,
  productSearch,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productsRoute = express.Router();

// routers
productsRoute.get("/", productsGetAll);
productsRoute.get("/search", productSearch);
productsRoute.post("/add", createProduct);
productsRoute.put("/update/:id", updateProduct);
productsRoute.delete("/delete/:id", deleteProduct);
productsRoute.get("/:id", productGetWithId);

module.exports = productsRoute;
