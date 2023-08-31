const products = require("../models/products.json");
const { responseHelper, renderHelper } = require("../helpers/api.helper");

// callback handlers
exports.productsGetAll = (req, res) => {
  data = {
    products,
    title: "Products Home page",
  };
  if (products.length > 0) {
    renderHelper(res, data, "index");
  } else {
    data.title = "there is no product yet";
    renderHelper(res, data, "index");
  }
};

exports.productGetWithId = (req, res) => {
  const paramId = req.params.id;
  const currentProduct = products.find(
    (product) => product.id === parseInt(paramId)
  );
  const data = {
    product: currentProduct,
    title: "Products Home page",
  };

  if (data.product) {
    // responseHelper(res, 200, currentProduct);
    renderHelper(res, data, "productDetails");
  } else {
    // responseHelper(res, 404, {
    //   message: "product not found",
    //   status_code: res.statusCode,
    // });
    renderHelper(res, data, "productDetails");
  }
};

exports.productSearch = (req, res) => {
  const { q, minPrice, maxPrice } = req.query;
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(q.toLowerCase()) &
      (parseInt(minPrice) < product.price) &
      (parseInt(maxPrice) > product.price)
    );
  });

  if (filteredProducts.length > 0) {
    responseHelper(res, 200, filteredProducts);
  } else {
    responseHelper(res, 404, {
      message: "product not found",
      status_code: res.statusCode,
    });
  }
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  responseHelper(res, 201, products);
};

exports.updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const indexOfProduct = products.findIndex(
    (product) => product.id === productId
  );
  if (indexOfProduct === -1) {
    responseHelper(res, 404, {
      message: "product not found",
      status_code: res.statusCode,
    });
  } else {
    const { name, price } = req.body;
    const updatedProduct = {
      id: productId,
      name,
      price,
    };
    products[indexOfProduct] = updatedProduct;
    responseHelper(res, 200, products[indexOfProduct]);
  }
};

exports.deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const indexOfProduct = products.findIndex(
    (product) => product.id === productId
  );
  if (indexOfProduct === -1) {
    responseHelper(res, 404, {
      message: "product not found",
      status_code: res.statusCode,
    });
  } else {
    products.splice(indexOfProduct, 1);
    responseHelper(res, 200, {
      products,
      message: `product deleted successfully`,
    });
  }
};
