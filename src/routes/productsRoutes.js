const express = require('express');
const router = express.Router();

/**
 * Middleware
 */
const productDataValidations = require('../middlewares/product/productDataValidations');
const uploadImgProduct = require('../middlewares/product/uploadProductImage');
/**
 * Controller
 */
const productList = require('../controllers/productsControllers/productList');
const createProductForm = require('../controllers/productsControllers/createProductForm');
const createProduct = require('../controllers/productsControllers/postNewProduct');
const detailsProduct = require('../controllers/productsControllers/detailProduct');
const editProductForm = require('../controllers/productsControllers/editProductForm');
const editProduct = require('../controllers/productsControllers/editProduct');
const deleteProduct = require('../controllers/productsControllers/deleteProduct');
const seekerProduct = require('../controllers/productsControllers/seekerProduct');
const adminMiddleware= require('../middlewares/user/adminMiddleware');

//page
router.get('/', productList);
//Registrar CREAR
router.get('/create', adminMiddleware, createProductForm);
router.post('/create', adminMiddleware, productDataValidations, uploadImgProduct.single('image'), createProduct)
//Motrar los usuarios READ
router.get('/details/:id', detailsProduct);
//Actualizar los datos del usuario UPDATE
router.get('/update/:id', adminMiddleware, editProductForm);
router.put('/update/:id', adminMiddleware, uploadImgProduct.single('image'), editProduct);
//Eliminar producto DELETE
router.delete('/delete/:id', adminMiddleware, deleteProduct)
//Buscador
router.get('/search?', seekerProduct)

module.exports = router;