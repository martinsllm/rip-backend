const router = require('express').Router();
const ArticleUserController = require('../../controllers/ArticleUserController')

router.get('/', ArticleUserController.List)
router.get('/:id', ArticleUserController.ListOne)
router.post('/', ArticleUserController.Create)
router.put('/:id', ArticleUserController.Update)
router.delete('/:id', ArticleUserController.Delete)

module.exports = router;