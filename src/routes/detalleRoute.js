const express = require ('express');

const router = express.Router();

const detalleController = require('../controllers/detalleController');

router.get('/detalle', detalleController);


module.exports = router;