function userEditMiddleware(req, res, next) {
	if (req.session.user.idusers != req.params.id) {
        const id = req.session.user.idusers;
		return res.redirect('/user/update/' + id);
	}
	next();
}

module.exports = userEditMiddleware;