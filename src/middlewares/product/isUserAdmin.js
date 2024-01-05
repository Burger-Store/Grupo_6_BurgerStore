const path = require ('path');

function isUserAdmin(req, res, next) {
	if (!req.session.userLogged || req.session.userLogged.idusertype !== 1) {
		return res.render('accessDenied');
	}
	next();
}

module.exports = isUserAdmin;