const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateMovie, validateId } = require('../middlewares/validations');

router.get('/', getMovies);
router.post('/', validateMovie, createMovie);
router.delete('/:id', validateId, deleteMovie);

module.exports = router;