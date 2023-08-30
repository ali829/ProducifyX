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
// logger middleware
app.use(loggerHandler);

// enable cors

const whitelist = [`http://localhost:${PORT}`, `http://192.168.3.15:${PORT}`];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
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
