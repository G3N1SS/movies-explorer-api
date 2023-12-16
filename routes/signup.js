const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { addNewUser } = require('../controllers/users');

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(3),
  }),
}), addNewUser);

module.exports = router;
