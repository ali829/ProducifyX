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

const whitelist = [`http://localhost:3000`, `http://192.168.3.15:3000`];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = {
  logger,
  corsOptions,
};
