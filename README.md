# Product API Documentation

This API provides endpoints to manage products in an online store.

## Routes and Controllers

### `productsRoute.js`

#### `GET /`

- Description: Get a list of all products or a message if no products are available.
- Controller: `productsGetAll`

#### `GET /search`

- Description: Search for products based on query parameters.
- Controller: `productSearch`

#### `POST /add`

- Description: Create a new product.
- Controller: `createProduct`

#### `PUT /update/:id`

- Description: Update a product's information.
- Controller: `updateProduct`

#### `DELETE /delete/:id`

- Description: Delete a product.
- Controller: `deleteProduct`

#### `GET /:id`

- Description: Get details of a specific product.
- Controller: `productGetWithId`

### `productController.js`

This module contains the callback handlers for each route.

### `models/products.json`

This JSON file contains an array of product objects.


- __D:\\Programming\\Projects\\ProducifyX__
   - [README.md](README.md)
   - __controllers__
     - [productController.js](controllers/productController.js)
   - __helpers__
     - [api.helper.js](helpers/api.helper.js)
     - [middleware.helper.js](helpers/middleware.helper.js)
   - __logs__
     - [errorLogs.txt](logs/errorLogs.txt)
     - [logging.txt](logs/logging.txt)
   - [main.js](main.js)
   - __middlewares__
     - [error.middleware.js](middlewares/error.middleware.js)
     - [logger.middleware.js](middlewares/logger.middleware.js)
   - __models__
     - [products.json](models/products.json)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __routes__
     - [productRoutes.js](routes/productRoutes.js)
   - __views__
     - [index.ejs](views/index.ejs)
     - [productDetails.ejs](views/productDetails.ejs)

