const db = require('../../../database/models')

const getUserById = (req,res) => {
    db.Users.findByPk(req.params.id)
    .then(function(user) {
        if(!user){
            return res.send('User not found');
        }
        res.render('userProfile', {users: user});
    })
}

module.exports = getUserById;