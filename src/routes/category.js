const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.List);
router.get('/:id', CategoryController.ListOne);
router.post('/', CategoryController.Create);
router.put('/:id', CategoryController.Update);
router.delete('/:id', CategoryController.Delete);

module.exports = router;