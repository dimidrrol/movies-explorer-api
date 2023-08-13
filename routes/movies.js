const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateId } = require('../middlewares/validations');

router.get('/movies', getMovies);
router.post('/movies', createMovie);
router.delete('/movies/:id', validateId, deleteMovie);

module.exports = router;
