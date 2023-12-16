const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const UnautorizedError = require('../errors/UnautorizedError');
const {
  requiredField, correctEmail, wrongEmailOrPassword, minlength, maxlength,
} = require('../config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, minlength],
    maxlength: [30, maxlength],
    required: [true, requiredField],
  },
  email: {
    type: String,
    required: [true, requiredField],
    unique: true,
    validate: {
      validator(email) {
        validator.isEmail(email);
      },
      message: correctEmail,
    },
  },
  password: {
    type: String,
    required: [true, requiredField],
    select: false,
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = async function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnautorizedError(wrongEmailOrPassword);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnautorizedError(wrongEmailOrPassword);
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
