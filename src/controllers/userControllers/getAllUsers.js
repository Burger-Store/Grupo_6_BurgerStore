const db = require('../../../database/models');
//const users = require('../../database/users.json');


const getAllUsers = (req,res) => {
    db.Users.findAll() //Limit 10 - salto 10
    .then(function(usersList){
        res.render('users',{users: usersList})
    })

    //const ruta = path.join(__dirname,'../../views/users.ejs');
    //console.log(ruta);
    //res.render(ruta,{allUsers: users})
    //res.send(users);
}

module.exports = getAllUsers;