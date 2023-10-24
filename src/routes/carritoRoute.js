const express = require ('express');

const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const carritoController = require('../controllers/cartControllers/carritoController.js');

router.get('/carrito', authMiddleware, carritoController);


module.exports = router;