const path = require ('path');

function adminMiddleware(req, res, next) {
	if (!req.session.userLogged || req.session.userLogged.idusertype !== 1) {
		return res.send("Acceso solo para administradores.");
	}
	next();
}

module.exports = adminMiddleware;