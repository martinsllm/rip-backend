const router = require('express').Router();
const auth = require('../../middlewares/auth');
const StatusController = require('../../controllers/StatusController');

router.get('/', StatusController.List);
router.get('/:id', StatusController.ListOne);
router.post('/', auth, StatusController.Create);
router.put('/:id', auth, StatusController.Update);
router.delete('/:id', auth, StatusController.Delete);

module.exports = router;