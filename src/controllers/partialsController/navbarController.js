const navbar= (req, res) => {
    return res.send('partials/header', {
        user: req.session.userLogged
    });
}

module.exports= profile;