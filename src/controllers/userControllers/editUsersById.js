const users = require('../../database/users.json');
const fs = require('fs');
const path = require ('path');

const editUser = (req, res) => {

    const { id } = req.params;

    const { name, email, password, country, address, lift, city, state, zipcode } = req.body;

    users.forEach((user)=>{
        if (user.id == id){
            user.id = parseInt(id);
            user.name = name;
            user.email = email;
            user.password = password;
            user.country = country;
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
            res.redirect('/users/:id')
        }
    })
}

module.exports = editUser;