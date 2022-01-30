const router = require('express').Router();
const auth = require('../../middlewares/auth');
const ArticleUserController = require('../../controllers/ArticleUserController')

router.get('/', ArticleUserController.List)
router.get('/:id', ArticleUserController.ListOne)
router.post('/', auth, ArticleUserController.Create)
router.put('/:id', auth, ArticleUserController.Update)
router.delete('/:id', auth, ArticleUserController.Delete)

module.exports = router;