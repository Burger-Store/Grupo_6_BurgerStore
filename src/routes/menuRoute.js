const express = require ('express');
const path = require ('path');

const router = express.Router();

const { getAllProducts }  = require('../controllers/menuControllers');

router.get('/', getAllProducts);        // ACA PARA VER EL LISTADO DE PRODUCTOS

module.exports = router;