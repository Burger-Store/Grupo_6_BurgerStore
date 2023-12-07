const db = require('../../../database/models');

const getAllUsers = (req,res) => {
    db.Users.findAll({
        limit:10,
        offset: 10
    }) 
    .then(function(usersList){
        res.render('users',{users: usersList})
    })


}
    

module.exports = getAllUsers;