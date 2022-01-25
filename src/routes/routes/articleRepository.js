const router = require('express').Router();
const ArticleRepositoryController = require('../../controllers/ArticleRepositoryController')

router.get('/', ArticleRepositoryController.List)
router.get('/:id', ArticleRepositoryController.ListOne)
router.post('/', ArticleRepositoryController.Create)
router.put('/:id', ArticleRepositoryController.Update)
router.delete('/:id', ArticleRepositoryController.Delete)

module.exports = router;