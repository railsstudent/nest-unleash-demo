import Joi = require('joi')

export const validationSchema = Joi.object({
  APP_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
  PORT: Joi.number().default(3000),
  FEATURE_TOGGLE_URL: Joi.string().required(),
  FEATURE_TOGGLE_APP_NAME: Joi.string().required(),
  FEATURE_TOGGLE_API_TOKEN: Joi.string().required(),
})
