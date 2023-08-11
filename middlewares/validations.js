const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;

const validateUrlRegex = /^(http|https):\/\/(?:www\.)?[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=]+#?$/;

const validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duratin: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(validateUrlRegex),
    trailerLink: Joi.string().required().pattern(validateUrlRegex),
    thumbnail: Joi.string().required().pattern(validateUrlRegex),
    movieId: Joi.number().required(),
    nameRu: Joi.string().required(),
    nameEN: Joi.string().required()
  }).unknown(true)
});

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }).unknown(true)
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }).unknown(true)
});

const validateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().email().required()
  }).unknown(true)
});

const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message('Неправильный id');
    })
  }).unknown(true)
});

module.exports = {
  validateMovie,
  validateUser,
  validateLogin,
  validateProfile,
  validateId
}