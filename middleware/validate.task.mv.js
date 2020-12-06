const yup = require('yup');

const VALIDATION_CREATE_SCHEMA = yup.object({
  value: yup.string().required(),
  isDone: yup.boolean().required(),
  deadline: yup.string().required(),
});
module.exports.validateOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    await VALIDATION_CREATE_SCHEMA.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};

const VALIDATION_UPDATE_SCHEMA = yup.object({
  // то же самое, но не обязательные параметры, "что придет, то и валидируем"
  value: yup.string(),
  isDone: yup.boolean(),
  deadline: yup.string(),
});
module.exports.validateOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    await VALIDATION_UPDATE_SCHEMA.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};
