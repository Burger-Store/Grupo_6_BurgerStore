const users = require('../../database/users.json');


const deleteUser = (req, res) => {
    db.User.destroy({
        where:{
        id: req.params.id
        }
    })
        
    res.redirect('/users')
}

module.exports = deleteUser;