const db = require('../../../database/models');

const deleteUser = (req, res) => {
    //Necesito obtener el userType
    let userprivileges = Object.values( db.users.findOne({
        where:{
            idusers: req.params.id
        }
    }))
    db.users.destroy({
        where: {
            idusers: req.params.id
        }
    })
    .then(function() {
        if(userprivileges == 2){
            res.redirect('/user/');
        } else {
            res.redirect('/');
        }
        
    })
    .catch(function (e){
        res.send(e);
    });
}

module.exports = deleteUser;
