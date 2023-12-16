const jwt = require('jsonwebtoken');
const UnautorizedError = require('../errors/UnautorizedError');
const { authorizationNeeded } = require('../config');

const { SECRET_KEY = 'mesto-test' } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnautorizedError(authorizationNeeded));
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (error) {
    next(new UnautorizedError(authorizationNeeded));
    return;
  }

  req.user = payload;

  next();
};
