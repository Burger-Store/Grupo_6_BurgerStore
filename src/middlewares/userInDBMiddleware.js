function userInDBMiddleware(req, res, next) {
    const resultValidation = validationResult(req);

if (resultValidation.errors.length > 0) {
    return res.render('signup', {
        errors: resultValidation.mapped(),
        oldData: req.body
    });
}

let userInDB = ('email', req.body.email);

if (userInDB) {
    return res.render('signup', {
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