const logout = (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    res.redirect('/');
}

module.exports = logout;