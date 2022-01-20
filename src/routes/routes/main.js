const router = require('express').Router();
const SessionController = require('../../controllers/SessionController');

router.post('/login', SessionController.Login);
router.post('/sendEmail', SessionController.SendEmail);
router.post('/changePassword', SessionController.ChangePassword);

module.exports = router;