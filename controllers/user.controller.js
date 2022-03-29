const createError = require('http-errors');

module.exports = {
  register: async (req, res, next) => {
    try {
      throw createError(400, 'Please do something');
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      return res.json({
        status: 200,
        message: 'Success',
        data: 'Hellow world',
      });
    } catch (error) {
      next(error);
    }
  },
};
