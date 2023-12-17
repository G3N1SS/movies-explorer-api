const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const requiredField = 'Обязательное поле!';
const filmTrailerUrl = 'Введите URL трейлера фильма.';
const filmPosterUrl = 'Введите URL постера к фильму.';
const correctEmail = 'Введите верный E-Mail.';
const wrongEmailOrPassword = 'Неправильные почта или пароль.';
const minlength = 'Минимальная длина поля - 2';
const maxlength = 'Максимальная длина поля - 30.';
const wrongId = 'Неправильный _id.';
const unknownCardId = 'Карточка с данным _id не найдена.';
const anotherUserCard = 'Карточка фильма другого пользователя.';
const deletedCard = 'Карточка удалена.';
const alreadyInUse = (email) => `Пользователь с email: ${email} уже зарегистрирован.`;
const unknownUserId = (userId) => `Пользователь по указанному _id ${userId} не найден.`;
const authorizationNeeded = 'Необходима авторизация.';
const serverError = 'На сервере произошла ошибка.';
const notFoundPage = 'Сожалеем, но страница не найдена.';

module.exports = {
  urlRegex,
  limiter,
  DB_ADDRESS,
  requiredField,
  filmTrailerUrl,
  filmPosterUrl,
  correctEmail,
  wrongEmailOrPassword,
  minlength,
  maxlength,
  wrongId,
  unknownCardId,
  anotherUserCard,
  deletedCard,
  alreadyInUse,
  unknownUserId,
  authorizationNeeded,
  serverError,
  notFoundPage,
};
