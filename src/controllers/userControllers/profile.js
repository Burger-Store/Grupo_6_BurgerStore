const profile = (req, res) => {
    if(req.session.user){
        const users = req.session.user;
        res.render('userProfile', { users });
    } else {
        res.redirect('/user/login');
    }
    
}

module.exports= profile;