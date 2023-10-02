const express = require ('express');

const router = express.Router();

const carritoController = require('../controllers/cartControllers/carritoController.js');

router.get('/carrito', carritoController);


module.exports = router;