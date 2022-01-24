const router = require('express').Router();
const RepositoryController = require('../../controllers/RepositoryController');

router.get('/', RepositoryController.List)
router.get('/:id', RepositoryController.ListOne)
router.post('/', RepositoryController.Create)
router.put('/:id', RepositoryController.Update)
router.delete('/:id', RepositoryController.Delete)

module.exports = router;