const { HTTP_STATUS_INTERNAL_SERVER_ERROR } = require('http2').constants;
const { serverError } = require('../config');

const errorHandler = (err, req, res, next) => {
  const { statusCode = HTTP_STATUS_INTERNAL_SERVER_ERROR, message } = err;
  res.status(statusCode).send({
    message: statusCode === HTTP_STATUS_INTERNAL_SERVER_ERROR
      ? serverError
      : message,
  });
  next();
};

module.exports = errorHandler;
