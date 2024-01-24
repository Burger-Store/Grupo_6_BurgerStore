const db = require('../../../database/models')

const getUserById = async (req,res) => {
    try{
        const users = await db.users.findByPk(req.params.id);
        const tipoUsuario = await db.usertype.findAll();
        res.render('editprofile', {users, tipoUsuario});
    }catch(error){
        res.send(error)
    }
}

module.exports = getUserById;