const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const userCtrl = require('../controllers/user');

router.get('/:userId', userCtrl.getUserById);
router.patch('/modifier-email', userCtrl.modifyUserEmail);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
