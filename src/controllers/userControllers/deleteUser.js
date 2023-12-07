const db = require('../../../database/models');

const deleteUser = (req, res) => {
    db.User.destroy({
        where:{
        id: req.params.id
        }
    })
        
    res.redirect('/users')
}

module.exports = deleteUser;