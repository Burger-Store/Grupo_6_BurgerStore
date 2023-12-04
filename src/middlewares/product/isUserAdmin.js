const path = require ('path');

function isUserAdmin(req, res, next) {
	if (!req.session.userLogged || req.session.userLogged.id !== 0) {
		return res.render('accessDanied');
	}
	next();
}

module.exports = isUserAdmin;