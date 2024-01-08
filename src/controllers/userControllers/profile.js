const profile = (req, res) => {
    res.render('userProfile', {users: req.session.userLogged});
}

module.exports= profile;