function userEditMiddleware(req, res, next) {
	if (req.session.userLogged.id != req.params.id) {
        const id = req.session.userLogged.id;
		return res.redirect('/user/' + id);
	}
	next();
}

module.exports = userEditMiddleware;