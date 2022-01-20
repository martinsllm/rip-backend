const router = require('express').Router();

router.use('/', require('./routes/main'));
router.use('/category', require('./routes/category'));
router.use('/status', require('./routes/status'));
router.use('/user', require('./routes/user'));

module.exports = router;