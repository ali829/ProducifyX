const responseHelper = (res, statusCode, responseContent) => {
  res.status(statusCode).json(responseContent);
};

module.exports = {
  responseHelper,
};
