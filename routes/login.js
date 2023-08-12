const router = require('express').Router();
const { createUser, login, logout } = require('../controllers/users');
const { validateLogin } = require('../middlewares/validations');

router.post('/signup', createUser);
router.post('/signin', validateLogin, login);
router.delete('/signout', logout);

module.exports = router;
