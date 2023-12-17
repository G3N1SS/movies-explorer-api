const router = require('express').Router();
const { signInValidation } = require('../validation');
const { login } = require('../controllers/users');

router.post('/', signInValidation, login);

module.exports = router;
