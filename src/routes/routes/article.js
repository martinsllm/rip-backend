const router = require('express').Router();
const ArticleController = require('../../controllers/ArticleController')

router.get('/', ArticleController.List)
router.get('/:id', ArticleController.ListOne)
router.get('/category/:id', ArticleController.ListCategory)
router.get('/status/:id', ArticleController.ListStatus)
router.post('/', ArticleController.Create)
router.put('/:id', ArticleController.Update)
router.delete('/:id', ArticleController.Delete)

module.exports = router;