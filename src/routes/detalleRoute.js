const express = require ('express');

const router = express.Router();

const detalleController = require('../controllers/productDetailControllers/detalleController.js');

router.get('/detalle', detalleController);


module.exports = router;