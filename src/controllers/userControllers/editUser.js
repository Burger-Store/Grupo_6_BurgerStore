const users = require('../../database/users.json');
const fs = require('fs');
const path = require ('path');
const bcryptjs = require('bcryptjs');

const editUser = (req, res) => {

    const { id } = req.params;

    const { name, surname, email, password, phone, address, lift, city, state, zipcode } = req.body;

    users.forEach((user)=>{
        if (user.id == id){
            user.id = parseInt(id);
            user.name = name;
            user.surname = surname;
            user.email = email;
            user.password = password.length != 0 ? bcryptjs.hashSync(password, 10) : user.password;
            user.phone = phone;
            user.address = address;
            user.lift = lift;
            user.city = city;
            user.state = state;
            user.zipcode = zipcode;
            user.image = req.file ? req.file.filename : user.image;
        }
    });

    const userPath = path.join(__dirname, '../../database/users.json')

    const data =JSON.stringify(users);

    fs.writeFile(userPath, data, (error)=>{
        if (error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect('/userProfile')
        }
    })
}

module.exports = editUser;