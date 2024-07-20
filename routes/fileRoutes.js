const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

// Upload file
router.post(
    '/upload',
    fileController.uploadFile,
    fileController.uploadFileHandler
);

// View all files
router.get('/', fileController.getAllFiles);

// Delete a file
router.delete('/:filename', fileController.deleteFile);

module.exports = router;
