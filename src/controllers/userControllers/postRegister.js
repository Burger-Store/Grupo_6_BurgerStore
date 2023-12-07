const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../../../database/models');


const postRegister = (req,res) => {
    
			db.Users.create({
		name: req.body.name,
		surname: req.body.surname,
		email: req.body.email,
		password: bcryptjs.hashSync(req.body.password, 10),
		phone: req.body.phone,
		address: req.body.address,
		lift: req.body.lift,
		city: req.body.city,
		state: req.body.state,
		zipcode: req.body.zipcode,
		image: req.file.filename,
		idusertype: '2'
	});


	res.redirect('/login');
}

module.exports = postRegister;