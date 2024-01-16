const db = require('../../../database/models');

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    try{
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie= await db.Users.findOne({
        where: {
            email: emailInCookie
        }
    })
        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }

        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }

    }catch(e){
        console.log(e)
    }
    
        next();
}

module.exports = userLoggedMiddleware;
