const express = require('express');
const multer = require('multer');
const path = require ('path');

const router = express.Router();

const storage = multer.diskStorage({        //para subir imagenes
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/products'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)                                             //crea con nombre original de la imagen
        //cb(null, `${Date.now()}_product${path.extname(file.originalname)}`)   //crea con un nombre distinto para no pisar los archivos
    }
});

const uploadImgProduct = multer({ storage });

const { getAllProducts, getProductById, formCreateProduct, postNewProduct, deleteProduct } = require('../controllers/productsControllers');

router.get('/products', getAllProducts);        // ACA PARA VER EL LISTADO DE PRODUCTOS
router.get('/product/:id', getProductById);     // ACA PARA OBTENER UN PRODUCTO X ID

router.get('/products/create', formCreateProduct);    // ACA PARA CREAR PRODUCTOS
router.post('/products', uploadImgProduct.single('image'), postNewProduct);       

//get de edicion de productos (formulario de edicion del producto)
//put de edicion de productos (a donde se envia el formulario)

router.delete('/product/delete/:id', deleteProduct);

module.exports = router;