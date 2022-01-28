const router = require('express').Router();
const ArticleController = require('../../controllers/ArticleController')

router.get('/', ArticleController.ListAll)
router.get('/:id', ArticleController.ListOne)
router.get('/category/:id', ArticleController.ListAllCategory)
router.get('/status/:id', ArticleController.ListAllStatus)
router.post('/', ArticleController.Create)
router.put('/:id', ArticleController.Update)
router.delete('/:id', ArticleController.Delete)

module.exports = router;