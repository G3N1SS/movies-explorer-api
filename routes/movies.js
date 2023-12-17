const router = require('express').Router();
const { deleteMovieValidation, postMovieValidation } = require('../validation');
const {
  addNewMovie, getMovies, deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.delete('/:movieId', deleteMovieValidation, deleteMovie);

router.post('/', postMovieValidation, addNewMovie);

module.exports = router;
