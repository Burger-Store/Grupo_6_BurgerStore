function authMiddleware(req, res, next) {
	if (!req.session.userLogged || req.session.userLogged.id !== 0) {
		return res.redirect('/login');
	}
	next();
}

module.exports = authMiddleware;