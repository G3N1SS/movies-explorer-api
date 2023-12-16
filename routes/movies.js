const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlRegex = require('../utils/constants');
const {
  addNewMovie, getMovies, deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
}), deleteMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(RegExp(urlRegex)),
    trailerLink: Joi.string().required().regex(RegExp(urlRegex)),
    thumbnail: Joi.string().required().regex(RegExp(urlRegex)),
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), addNewMovie);

module.exports = router;
