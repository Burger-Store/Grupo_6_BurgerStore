const { body } = require('express-validator');

module.exports= [
    body('email').isEmail().withMessage('Invalid mail'),
    body('password').notEmpty().withMessage('Enter a password')
];