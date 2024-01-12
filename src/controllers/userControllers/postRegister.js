const db = require('../../../database/models');

const bcryptjs = require('bcryptjs');

const postRegister = (req,res) => {
	let pass= bcryptjs.hashSync(req.body.password, 10);
	console.log(pass);
    db.users.create({
		name: req.body.name,
		surname: req.body.surname,
		email: req.body.email,
		password: pass,
		phone: req.body.phone,
		address: req.body.address,
		lift: req.body.lift,
		city: req.body.city,
		state: req.body.state,
		zipcode: req.body.zipcode,
		image: req.file.filename,
		idusertype: 2
	});
	res.redirect('/user/login');
}

module.exports = postRegister;