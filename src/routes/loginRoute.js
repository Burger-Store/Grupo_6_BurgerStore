const express = require ('express');

const router = express.Router();

const guestMiddleware = require('../middlewares/guestMiddleware');
const loginController = require('../controllers/loginControllers/loginController.js');

router.get('/login', guestMiddleware ,loginController);


module.exports = router;