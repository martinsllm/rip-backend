const router = require('express').Router();
const auth = require('../../middlewares/auth');
const RepositoryController = require('../../controllers/RepositoryController');

router.get('/', RepositoryController.List)
router.get('/:id', RepositoryController.ListOne)
router.post('/', auth, RepositoryController.Create)
router.put('/:id', auth, RepositoryController.Update)
router.delete('/:id', auth, RepositoryController.Delete)

module.exports = router;