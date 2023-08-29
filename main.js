// import express
const express = require("express");
const app = express();
// default port to listen too
const PORT = process.env.PORT || 3000;

// format request body to json
app.use(express.json());

// import routers
const productsRoute = require("./routes/productRoutes");

// routes
app.use("/products", productsRoute);

// listen to the port
app.listen(PORT, () => {
  console.log(`app listen to port number ${PORT}`);
});
