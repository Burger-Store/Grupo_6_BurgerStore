const express = require ('express');

const router = express.Router();

const signupController = require('../controllers/signupControllers/signupController.js');

router.get('/signup', signupController);


module.exports = router;