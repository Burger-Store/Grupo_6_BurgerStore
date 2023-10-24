const express = require('express');
const multer = require('multer');
const path = require ('path');

const router = express.Router();

const adminMiddleware = require('../middlewares/adminMiddleware');
const uploadImgProduct = require('../middlewares/multerProductMiddleware');

const { getAllProducts, getProductById, formCreateProduct, postNewProduct, deleteProduct, editProduct } = require('../controllers/productsControllers');

router.get('/products', adminMiddleware, getAllProducts);        // ACA PARA VER EL LISTADO DE PRODUCTOS
router.get('/product/:id', adminMiddleware, getProductById);     // ACA PARA OBTENER UN PRODUCTO X ID

router.get('/products/create', adminMiddleware, formCreateProduct);    // ACA PARA CREAR PRODUCTOS
router.post('/products', adminMiddleware, uploadImgProduct.single('image'), postNewProduct);       

// router.get('/product/:id/edit', getProductById);        //get de edicion de productos

router.put('/product/:id/edit', adminMiddleware, uploadImgProduct.single('image'), editProduct);     //put de edicion de productos )
router.delete('/product/:id/delete', adminMiddleware, deleteProduct);

module.exports = router;