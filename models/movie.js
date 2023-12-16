const mongoose = require('mongoose');
const urlRegex = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Обязательное поле!'],
  },
  director: {
    type: String,
    required: [true, 'Обязательное поле!'],
  },
  duration: {
    type: Number,
    required: [true, 'Обязательное поле!'],
  },
  year: {
    type: String,
    required: [true, 'Обязательное поле!'],
  },
  description: {
    type: String,
    required: [true, 'Обязательно поле!'],
  },
  image: {
    type: String,
    required: [true, 'Обязательное поле!'],
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: 'Введите URL постера к фильму',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Обязательное поле!'],
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: 'Введите URL трейлера фильма',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Обязательное поле!'],
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: 'Введите URL постера к фильму',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Обязательное поле!'],
  },
  nameRU: {
    type: String,
    required: [true, 'Обязательное поле!'],
  },
  nameEN: {
    type: String,
    required: [true, 'Обязательное поле!'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
