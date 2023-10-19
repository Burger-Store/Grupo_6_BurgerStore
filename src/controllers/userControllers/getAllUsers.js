const users = require('../../database/users.json');
const path = require('path');

const getAllUsers = (req,res) => {
    
    const ruta = path.join(__dirname,'../../views/users.ejs');
    console.log(ruta);
    res.render(ruta,{allUsers: users})
    //res.send(users);
}

module.exports = getAllUsers;