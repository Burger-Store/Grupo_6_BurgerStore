const profile = (req, res) => {
    return res.render('userProfile', {
        users: req.session.userLoggedMiddleware
    });
}

module.exports= profile;