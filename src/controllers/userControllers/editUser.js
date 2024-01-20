const db = require('../../../database/models');

const bcryptjs = require('bcryptjs');

const editUser = (req, res) => {
    const user = db.users.findByPk(req.params.id)
    db.users.update({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        lift: req.body.lift,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        image: req.file ? req.file.filename : user.image,
        idusertype: req.body.idusertype
    },
    {
        where:{
            idusers: req.params.id
        }
    })
    res.redirect(`/user/profile/${req.params.id}`)

}

 module.exports = editUser;