const db = require('../../../database/models');

const getAllUsers = (req,res) => {
    db.users.findAll() 
    .then(function(usersList){
        res.render('users',{users: usersList})
    })
}

module.exports = getAllUsers;