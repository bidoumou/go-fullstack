const multer = require('multer');

const MIME_TYPES = {
    'images/jpg': 'jpg',
    'images/jpeg': 'jpg',
    'images/png': 'png'
}

const storage = multer.diskStockage({
    destination: (req, res, next) => {
        callback(null, 'images')
    },
    filename: (req, res, next) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage}).single('image');