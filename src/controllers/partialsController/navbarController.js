const navbar= (req, res) => {
    return res.send('partiasls/header', {
        user: req.session.userLogged
    });
}

module.exports= profile;