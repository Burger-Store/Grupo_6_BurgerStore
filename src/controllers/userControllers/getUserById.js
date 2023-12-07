const db = require('../../../database/models')

const path = require('path');

const getUserById = (req,res) => {
    const { id } = req.params;

    const user = db.findByPk(req.params.id)
    .then(function(user) {
        if(!user){
            return res.send('User not found');
        }
        res.render('userProfile', {
          user: user  
        });
    })

    
}

module.exports = getUserById;