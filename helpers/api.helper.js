const responseHelper = (res, statusCode, responseContent) => {
  res.status(statusCode).json(responseContent);
};

const renderHelper = (res, data, ejsFile) => {
  res.render(ejsFile, data);
};

module.exports = {
  responseHelper,
  renderHelper,
};
