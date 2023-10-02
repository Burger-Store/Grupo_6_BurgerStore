const express = require ('express');

const router = express.Router();

const loginController = require('../controllers/loginControllers/loginController.js');

router.get('/login', loginController);


module.exports = router;