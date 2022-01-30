const router = require('express').Router();
const auth = require('../../middlewares/auth');
const PhotoController = require('../../controllers/PhotoController');

const multer = require('multer');
const upload = multer({});

router.get('/', PhotoController.List)
router.get('/:id', PhotoController.ListOne)
router.post('/:id', auth, upload.single('image'), PhotoController.Create)
router.delete('/:id', auth, PhotoController.Delete)

module.exports = router;