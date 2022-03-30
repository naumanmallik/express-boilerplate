const router = require('express').Router();
const createError = require('http-errors');
const { noToken } = require('../utils/messages.util');

router.use(function (req, res, next) {
  if (req.path.search('/login') > -1 || req.path.search('/register') > -1) {
    return next();
  }
  const token = req.header('authorization');
  if (!token) {
    throw createError(401, noToken);
  }
  req.user = token; // Decoded user
  return next();
});

module.exports = router;
