const router = require('express').Router();
const StatusController = require('../../controllers/StatusController');

router.get('/', StatusController.List);
router.get('/:id', StatusController.ListOne);
router.post('/', StatusController.Create);
router.put('/:id', StatusController.Update);
router.delete('/:id', StatusController.Delete);

module.exports = router;