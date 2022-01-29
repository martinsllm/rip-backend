const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.get('/', UserController.List);
router.get('/:id', UserController.ListOne);
router.get('/article/:id', UserController.ListArticle);
router.post('/', UserController.Create);
router.put('/:id', UserController.Update);
router.delete('/:id', UserController.Delete);

module.exports = router;