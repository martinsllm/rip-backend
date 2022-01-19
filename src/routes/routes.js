const router = require('express').Router();

router.use('/category', require('./routes/category'));
router.use('/status', require('./routes/status'));

module.exports = router;