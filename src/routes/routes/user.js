const router = require('express').Router();
const auth = require('../../middlewares/auth');
const UserController = require('../../controllers/UserController');

router.get('/', UserController.List);
router.get('/:id', auth, UserController.ListOne);
router.get('/article/:id', auth, UserController.ListArticle);
router.post('/', auth, UserController.Create);
router.put('/:id', auth, UserController.Update);
router.delete('/:id', auth, UserController.Delete);

module.exports = router;