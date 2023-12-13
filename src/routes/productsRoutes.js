const express = require('express');
const router = express.Router();

/**
 * Middleware
 */
const adminMiddleware = require('../middlewares/product/productDataValidations');
const uploadImgProduct = require('../middlewares/product/uploadProductImage');
const isUserAdmin = require('../middlewares/product/isUserAdmin');
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

//page
router.get('/', productList);
//Registrar CREAR
router.get('/create', createProductForm);
router.post('/create', adminMiddleware, uploadImgProduct.single('image'), createProduct)
//Motrar los usuarios READ
router.get('/details/:id', detailsProduct);
//Actualizar los datos del usuario UPDATE
router.get('/update/:id', editProductForm);
router.put('/update/:id',uploadImgProduct.single('image'), editProduct);
//Eliminar producto DELETE
router.delete('/delete/:id', deleteProduct)

module.exports = router;