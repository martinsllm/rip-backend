const router = require('express').Router();
const PhotoController = require('../../controllers/PhotoController');

const multer = require('multer');
const upload = multer({});

router.get('/', PhotoController.List)
router.get('/:id', PhotoController.ListOne)
router.post('/:id', upload.single('image'), PhotoController.Create)
router.delete('/:id', PhotoController.Delete)

module.exports = router;