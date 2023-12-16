const mongoose = require('mongoose');
const {
  urlRegex, requiredField, filmPosterUrl, filmTrailerUrl,
} = require('../config');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, requiredField],
  },
  director: {
    type: String,
    required: [true, requiredField],
  },
  duration: {
    type: Number,
    required: [true, requiredField],
  },
  year: {
    type: String,
    required: [true, requiredField],
  },
  description: {
    type: String,
    required: [true, requiredField],
  },
  image: {
    type: String,
    required: [true, requiredField],
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: filmPosterUrl,
    },
  },
  trailerLink: {
    type: String,
    required: [true, requiredField],
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: filmTrailerUrl,
    },
  },
  thumbnail: {
    type: String,
    required: [true, requiredField],
    validate: {
      validator(v) {
        return urlRegex.test(v);
      },
      message: filmPosterUrl,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, requiredField],
  },
  nameRU: {
    type: String,
    required: [true, requiredField],
  },
  nameEN: {
    type: String,
    required: [true, requiredField],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
