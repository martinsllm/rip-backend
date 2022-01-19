const router = require('express').Router();

router.use('/category', require('./routes/category'));
router.use('/status', require('./routes/status'));
router.use('/user', require('./routes/user'));

module.exports = router;