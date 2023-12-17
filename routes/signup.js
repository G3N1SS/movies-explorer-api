const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');
const { addNewUser } = require('../controllers/users');
const { signUpValidation } = require('../validation');

// router.post('/', celebrate({
//   body: Joi.object().keys({
//     name: Joi.string().required().min(2).max(30),
//     email: Joi.string().required().email(),
//     password: Joi.string().required().min(3),
//   }),
// }), addNewUser);

router.post('/', signUpValidation, addNewUser);

module.exports = router;
