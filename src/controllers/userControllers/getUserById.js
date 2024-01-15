const db = require('../../../database/models')

const getUserById = (req,res) => {
    db.users.findByPk(req.params.id)
    .then(function(user) {
        if(!user){
            return res.send('User not found');
        }
        res.render('editprofile', {users: user});
    })
}

module.exports = getUserById;