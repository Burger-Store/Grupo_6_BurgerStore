const navbar= (req, res) => {
    const users = req.session.user;
    if(users != null){
    res.render('partials/header', { users });
    } else {
        res.render('partials/header', { users: null });
    }
}

module.exports= navbar;