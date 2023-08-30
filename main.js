// import express
const express = require("express");
const app = express();
//cors
const cors = require("cors");

// default port to listen too
const PORT = process.env.PORT || 3000;

// import custom middleware handlers
const { loggerHandler } = require("./middlewares/logger.middleware");
const { errorHandlerMiddleware } = require("./middlewares/error.middleware");
// import custom middleware helper
const { corsOptions } = require("./helpers/middleware.helper");
// logger middleware
app.use(loggerHandler);
// enable cors
app.use(cors(corsOptions));

// format request body to json
app.use(express.json());

// import routers
const productsRoute = require("./routes/productRoutes");

// routes
app.use("/api/v1/products", productsRoute);

// error handling middleware
app.use(errorHandlerMiddleware);

// listen to the port
app.listen(PORT, () => {
  console.log(`app listen to port number ${PORT}`);
});
