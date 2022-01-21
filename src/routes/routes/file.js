const router = require('express').Router();
const FileController = require('../../controllers/FileController');

const multer = require('multer');
const upload = multer({});

router.get('/', FileController.List)
router.get('/:id', FileController.ListOne)
router.post('/:id', upload.single('file'), FileController.Create)
router.delete('/:id', FileController.Delete)

module.exports = router;