const router = require('express').Router();

router.use('/', require('./routes/main'));
router.use('/article', require('./routes/article'));
router.use('/articleUser', require('./routes/articleUser'));
router.use('/articleRepository', require('./routes/articleRepository'));
router.use('/category', require('./routes/category'));
router.use('/file', require('./routes/file'));
router.use('/link', require('./routes/link'));
router.use('/photo', require('./routes/photo'));
router.use('/repository', require('./routes/repository'));
router.use('/status', require('./routes/status'));
router.use('/user', require('./routes/user'));

module.exports = router;