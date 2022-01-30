const router = require('express').Router();
const auth = require('../../middlewares/auth');
const LinkController = require('../../controllers/LinkController');

router.get('/', LinkController.List);
router.get('/:id', LinkController.ListOne);
router.post('/', auth, LinkController.Create);
router.put('/:id', auth, LinkController.Update);
router.delete('/:id', auth, LinkController.Delete);

module.exports = router;