const router = require('express').Router();
const auth = require('../../middlewares/auth');
const FileController = require('../../controllers/FileController');

const multer = require('multer');
const upload = multer({});

router.get('/', FileController.List)
router.get('/:id', FileController.ListOne)
router.post('/:id', auth, upload.single('file'), FileController.Create)
router.delete('/:id', auth, FileController.Delete)

module.exports = router;