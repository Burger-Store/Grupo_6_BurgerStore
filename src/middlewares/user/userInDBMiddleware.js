function userInDBMiddleware(req, res, next) {
    const resultValidation = validationResult(req.body.email);

if (resultValidation.errors.length > 0) {
    return res.render('register', {
        errors: resultValidation.mapped(),
        oldData: req.body
    });
}

let userInDB = ('email', req.body.email);

if (userInDB) {
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