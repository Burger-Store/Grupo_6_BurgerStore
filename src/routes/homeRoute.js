const express = require ('express');

const router = express.Router();

const homeController = require('../controllers/homeControllers/homeController.js');

router.get('/home', homeController);


module.exports = router;