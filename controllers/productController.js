const products = require("../models/products.json");

// callback handlers
exports.productsGetAll = (req, res) => {
  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(204).json({
      message: "There is no product here",
      status_code: res.statusCode,
    });
  }
};

exports.productGetWithId = (req, res) => {
  const paramId = req.params.id;
  const currentProduct = products.find(
    (product) => product.id === parseInt(paramId)
  );

  if (currentProduct) {
    res.status(200).json(currentProduct);
  } else {
    res
      .status(404)
      .json({ message: "product not found", status_code: res.statusCode });
  }
};

exports.productSearch = (req, res) => {
  const q = req.query.q;
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(q.toLowerCase()) &
      (parseInt(minPrice) < product.price) &
      (parseInt(maxPrice) > product.price)
    );
  });

  if (filteredProducts.length > 0) {
    res.status(200).json(filteredProducts);
  } else {
    res
      .status(404)
      .json({ message: "product not found", status_code: res.statusCode });
  }
};

exports.createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(products);
};

exports.updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const indexOfProduct = products.findIndex(
    (product) => product.id === productId
  );
  if (indexOfProduct === -1) {
    res.status(404).json("product not found");
  } else {
    const updatedProduct = {
      id: productId,
      name: req.body.name,
      price: req.body.price,
    };
    products[indexOfProduct] = updatedProduct;
    res.status(200).json(products[indexOfProduct]);
  }
};

exports.deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const indexOfProduct = products.findIndex(
    (product) => product.id === productId
  );
  if (indexOfProduct === -1) {
    res.status(404).json("product not found");
  } else {
    products.splice(indexOfProduct, 1);
    res.status(200).json({
      products,
      message: `product ${
        products[indexOfProduct - 1].name
      } deleted successfully`,
    });
  }
};
