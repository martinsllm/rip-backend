const router = require('express').Router();
const LinkController = require('../../controllers/LinkController');

router.get('/', LinkController.List);
router.get('/:id', LinkController.ListOne);
router.post('/', LinkController.Create);
router.put('/:id', LinkController.Update);
router.delete('/:id', LinkController.Delete);

module.exports = router;