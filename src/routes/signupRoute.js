const express = require ('express');

const router = express.Router();

const guestMiddleware = require('../middlewares/guestMiddleware');
const signupController = require('../controllers/signupControllers/signupController.js');

router.get('/signup', guestMiddleware ,signupController);


module.exports = router;