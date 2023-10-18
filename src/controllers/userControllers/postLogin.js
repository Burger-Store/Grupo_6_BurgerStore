const User = require ('../../models/User')
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');


const postLogin = (req,res) => {
    let userToLogin = User.findByField('email', req.body.email);
		
	if(userToLogin) {
		let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
		if (correctPassword) {
			delete userToLogin.password;
			req.session.userLogged = userToLogin;

			if(req.body.remember) {
				res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
			}

			return res.redirect('userProfile');
		} 
		
	return res.render('login', {
		errors: {
			email: {
				msg: 'Las credenciales son inválidas'
			}
		}
	});
    }

	return res.render('login', {
		errors: {
			email: {
				msg: 'No se encuentra este email en nuestra base de datos'
			}
		}
	});
}

module.exports = postLogin;