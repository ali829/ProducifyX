const { logger } = require("./logger.middleware");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err) {
    logger(`${err.name} ${err.message}`, "errorLogs.txt");
    console.error(err.stack);
    res
      .status(500)
      .json({ message: `Something broke!`, status_code: res.statusCode });
  }
};

module.exports = {
  errorHandlerMiddleware,
};
