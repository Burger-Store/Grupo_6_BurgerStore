const db = require('../../../database/models');

const userInDBMiddleware = async (req, res, next) => {
    console.log(req.body.email)
    const userLookingFor = await db.users.findOne({
        where: {
            email: req.body.email
        }
    })
    console.log(userLookingFor)
    /*if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }*/

    /*if (userLookingFor) {
        return res.redirect('user/register', {
            errors: {
                email: {
                    msg: 'Este email ya está registrado' 
                }
            },
        });
    }*/

    next();
}

module.exports = userInDBMiddleware;