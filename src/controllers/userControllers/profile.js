const profile = (req, res) => {
    const users = req.session.user;
    res.render('userProfile', { users });
}

module.exports= profile;