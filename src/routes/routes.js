const router = require('express').Router();
const SessionController = require('../controllers/SessionController');

router.post('/login', SessionController.Login);
router.post('/sendEmail', SessionController.SendEmail);
router.post('/changePassword', SessionController.ChangePassword);

router.use('/category', require('./routes/category'));
router.use('/status', require('./routes/status'));
router.use('/user', require('./routes/user'));

module.exports = router;