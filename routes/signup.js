const router = require('express').Router();
const { addNewUser } = require('../controllers/users');
const { signUpValidation } = require('../validation');

router.post('/', signUpValidation, addNewUser);

module.exports = router;
