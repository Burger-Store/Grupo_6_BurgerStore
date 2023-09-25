const express = require('express');

const router = express.Router();

const { getAllProducts, getProductById, formCreateProduct, postNewProduct, deleteProduct } = require('../controllers/productsControllers');

router.get('/products', getAllProducts);        // ACA PARA VER EL LISTADO DE PRODUCTOS
router.get('/product/:id', getProductById);     // ACA PARA OBTENER UN PRODUCTO X ID

router.get('/products/create', formCreateProduct);    // ACA PARA CREAR PRODUCTOS
router.post('/products', postNewProduct);       

router.delete('/product/delete/:id', deleteProduct);

module.exports = router;