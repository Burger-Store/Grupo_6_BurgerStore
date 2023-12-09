const express = require ('express');
const router = express.Router();

const storeController = require('../controllers/storeControllers/storeController.js');

router.get('/', storeController);


module.exports = router;