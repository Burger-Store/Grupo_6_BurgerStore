const db = require('../../../database/models');

const deleteUser = (req, res) => {
    db.users.destroy({
        where: {
            idusers: req.params.id
        },
    });
    if(req.session.user.idusertype === 1 && req.session.user.idusers != req.params.id){
        res.redirect('/user')
    }else{
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = deleteUser;
