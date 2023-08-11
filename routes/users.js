const router = require('express').Router();
const { getUser, patchUser } = require('../controllers/users');
const { validateProfile } = require('../middlewares/validations');

router.get('/me', getUser);
router.patch('/me', validateProfile, patchUser);

module.exports = router;