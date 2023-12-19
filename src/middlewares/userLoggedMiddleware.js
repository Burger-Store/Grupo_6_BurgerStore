const db = require('../../database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
	if (!emailInCookie) {
		res.redirect('/user/login')
	}
    db.Users.findOne({
        where: {
            email: emailInCookie
        }
    }).then(userFromCookie => {
        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }

        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }

        next();

    }).catch(err => {
        console.error('Error', err);
        next(err);
    });
}

module.exports = userLoggedMiddleware;
