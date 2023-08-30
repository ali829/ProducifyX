const { logger } = require("../helpers/middleware.helper.js");

const loggerHandler = (req, res, next) => {
  logger(
    `Request Method: ${req.method}\t Request Url: ${req.path}`,
    "logging.txt"
  );
  next();
};

module.exports = {
  logger,
  loggerHandler,
};
