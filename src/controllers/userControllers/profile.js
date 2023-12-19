const profile = (req, res) => {
    return res.render('userProfile', {
        user: req.session.userLoggedMiddleware
    });
}

module.exports= profile;