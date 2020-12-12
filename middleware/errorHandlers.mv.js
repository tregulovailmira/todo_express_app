const {
  Sequelize: { BaseError },
} = require('../models');

module.exports.sequelizeErrorHandler = (error, req, res, next) => {
  if (error instanceof BaseError) {
    console.log('BaceError: ', error);
    return;
  }
  next(error);
};

module.exports.errorHandler = (error, req, res, next) => {
  res.status(error?.status ?? 500).send({
    data: null,
    errors: [{ title: error?.message ?? 'Enternal server error' }],
    meta: null,
  });
};
