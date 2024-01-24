function userEditMiddleware(req, res, next) {
	if (req.session.user.idusers != req.params.id && req.session.user.idusertype !== 1) {
        const id = req.session.user.idusers;
		return res.redirect('/user/update/' + id);
	}
	next();
}

module.exports = userEditMiddleware;