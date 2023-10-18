const profile = (req, res) => {
    return res.render('userProfile', {
        user: req.session.userLogged
    });
}

module.exports= profile;