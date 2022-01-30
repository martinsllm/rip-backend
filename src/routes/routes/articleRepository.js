const router = require('express').Router();
const auth = require('../../middlewares/auth');
const ArticleRepositoryController = require('../../controllers/ArticleRepositoryController')

router.get('/', ArticleRepositoryController.List)
router.get('/:id', ArticleRepositoryController.ListOne)
router.post('/', auth, ArticleRepositoryController.Create)
router.put('/:id', auth, ArticleRepositoryController.Update)
router.delete('/:id', auth, ArticleRepositoryController.Delete)

module.exports = router;