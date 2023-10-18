const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../../models/User');

const postRegister = (req,res) => {
    const resultValidation = validationResult(req);

	if (resultValidation.errors.length > 0) {
		return res.render('signup', {
			errors: resultValidation.mapped(),
			oldData: req.body
		});
	}

	let userInDB = User.findByField('email', req.body.email);

	if (userInDB) {
		return res.render('signup', {
			errors: {
				email: {
					msg: 'Este email ya está registrado'
				}
			},
			oldData: req.body
		});
	}

	let userToCreate = {
		...req.body,
		password: bcryptjs.hashSync(req.body.password, 10),
		image: req.file.filename
	}

	let userCreated = User.create(userToCreate);

	return res.redirect('/login');
}

module.exports = postRegister;