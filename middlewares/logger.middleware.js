const { format } = require("date-fns");
const fsPromise = require("fs").promises;
const fs = require("fs");
const path = require("path");

const logger = async (message, fileName) => {
  try {
    const loggerDate = format(new Date(), "yyyy/MM/dd HH:MM:SS");
    const loggingMessage = `Date : ${loggerDate}\t ${message}\n`;
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromise.appendFile(
      path.join(__dirname, "../logs", fileName),
      loggingMessage,
      "utf-8"
    );
  } catch (error) {
    console.error(error);
  }
};

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
