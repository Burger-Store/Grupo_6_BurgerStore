const db = require("../../../database/models");
const {validationResult} = require('express-validator');

async function userInDBMiddleware(req, res, next) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }

    let userInDB = await db.users.findOne({ 
        where: {
            email: req.body.email || null
        },
    });

    if (userInDB !== null) {
        return res.render('register', {
            errors: {
                email: {
                    msg: 'Este email ya está registrado' 
                }
            },
            oldData: req.body
        });
    }

    next();

}
module.exports= userInDBMiddleware
