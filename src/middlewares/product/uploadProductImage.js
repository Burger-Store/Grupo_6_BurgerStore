const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({        //para subir imagenes
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../../public/img/products'))
    },
    filename: (req, file, cb) => {
        // cb(null, file.originalname)                                         //crea con nombre original de la imagen
        cb(null, `${Date.now()}_product${path.extname(file.originalname)}`)   //crea con un nombre distinto para no pisar los archivos
    }
});

const uploadImgProduct = multer({ storage });

module.exports = uploadImgProduct;