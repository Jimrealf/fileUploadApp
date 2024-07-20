const express = require('express');
const fs = require('fs');
const path = require('path');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

app.use(express.json());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use(express.static('public'));

app.use('/files', fileRoutes);

module.exports = app;
