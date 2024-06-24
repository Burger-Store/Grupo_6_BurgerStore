const path = require ('path');

function adminMiddleware(req, res, next) {
	if (!req.session.user || req.session.user.idusertype != 1) {
		return res.send("Acceso solo para administradores.");
	}
	next();
}

module.exports = adminMiddleware;