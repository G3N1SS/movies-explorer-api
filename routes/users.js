const router = require('express').Router();
const { userPatchValidation } = require('../validation');
const {
  editUserData, getMeUser,
} = require('../controllers/users');

router.get('/me', getMeUser);

router.patch('/me', userPatchValidation, editUserData);

module.exports = router;
