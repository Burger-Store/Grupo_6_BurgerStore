const users = require('../../database/users.json');
const path = require('path');

const getUserById = (req,res) => {
    const { id } = req.params;

    const user = users.find((usuario) => usuario.id == id);

    if(!user){
        return res.send('User not found');
    }

    const form = path.join(__dirname, '../../views/editProfile')
    res.render(form, { user });
}

module.exports = getUserById;