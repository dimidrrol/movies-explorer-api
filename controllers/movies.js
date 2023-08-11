const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const { country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId } = req.body;
  const owner = req.user._id;

  Movie.create({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId, owner })
    .then((movie) => res.status(201).send(movie))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;

  Movie.findById(id)
    .orFail(new NotFoundError('Фильм не найден'))
    .then((movie) => {
      const movieOwner = movie.owner.toString();
      if (movieOwner !== userId) {
        throw new ForbiddenError('Невозможно удалить чужой фильм');
      } else {
        Movie.deleteOne(movie)
          .then((movie) => {
            res.send(movie);
          });
      }
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie
}