const createError = require('http-errors');
const User = require('../models/user.model');
const {
  emailExists,
  invalidEmailOrPassword,
} = require('../utils/messages.util');

module.exports = {
  register: async (req, res, next) => {
    try {
      const { body: payload } = req;
      let user;
      user = await User.findOne({
        email: payload.email,
      });
      if (user) {
        throw createError(400, emailExists);
      }
      user = await User.create(payload);
      let token = user.getJWTToken();
      user._doc['token'] = token;
      return res.json({
        status: 200,
        message: 'Success',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { body: payload } = req;
      const user = await User.findOne({ email: payload.email });
      if (!user || !user.verifyPassword(payload.password)) {
        throw createError(400, invalidEmailOrPassword);
      }
      const token = user.getJWTToken();
      user._doc["token"] = token;
      return res.json({
        status: 200,
        message: 'Success',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
