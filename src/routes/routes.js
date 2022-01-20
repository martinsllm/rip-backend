const router = require('express').Router();
const SessionController = require('../controllers/SessionController');

router.post('/login', SessionController.Login);

router.use('/category', require('./routes/category'));
router.use('/status', require('./routes/status'));
router.use('/user', require('./routes/user'));

module.exports = router;