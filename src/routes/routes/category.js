const router = require('express').Router();
const auth = require('../../middlewares/auth');
const CategoryController = require('../../controllers/CategoryController');

router.get('/', CategoryController.List);
router.get('/:id', CategoryController.ListOne);
router.post('/', auth, CategoryController.Create);
router.put('/:id', auth, CategoryController.Update);
router.delete('/:id', auth, CategoryController.Delete);

module.exports = router;