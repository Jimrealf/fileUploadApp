const fs = require('fs');
const path = require('path');
const multer = require('multer');
const uploadDir = path.join(__dirname, '../uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

uploadFile = upload.single('file');

uploadFileHandler = (req, res) => {
    res.send({ message: 'File uploaded successfully', file: req.file });
};

getAllFiles = (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan files');
        }
        res.send(files);
    });
};

deleteFile = (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(uploadDir, filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(404).send({ message: 'File not found' });
        }

        res.send({ message: 'File deleted successfully' });
    });
};

module.exports = {
    uploadFile,
    uploadFileHandler,
    getAllFiles,
    deleteFile,
};
