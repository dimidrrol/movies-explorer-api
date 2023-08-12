const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле "country" должно быть заполнено'],
  },
  director: {
    type: String,
    required: [true, 'Поле "director" должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле "duration" должно быть заполнено'],
  },
  year: {
    type: String,
    required: [true, 'Поле "year" должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле "description" должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле "image" должно быть заполнено'],
    match: /^(?:https?:\/\/)?(?:www\.)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}(\/\S*)?$/,
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле "trailerLink" должно быть заполнено'],
    match: /^(?:https?:\/\/)?(?:www\.)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}(\/\S*)?$/,
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле "thumbnail" должно быть заполнено'],
    match: /^(?:https?:\/\/)?(?:www\.)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}(\/\S*)?$/,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: [true, 'Поле "nameRU" должно быть заполнено'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле "nameEN" должно быть заполнено'],
  },
}, { versionKey: false });

const Movie = mongoose.model('movie', cardSchema);
module.exports = Movie;
