const db = require ('../../../database/models')
const bcryptjs = require('bcryptjs');

const postLogin = async	(req,res,next) => {
    let userToLogin = await db.users.findOne({
		where: {
			email: req.body.email
		}
	})
	if(userToLogin) {
		
		let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.dataValues.password);
		if (correctPassword) {
			delete userToLogin.dataValues.password;

			req.session.user = userToLogin
			
			if(req.body.remember) {
				res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
			}
			
			return res.redirect('/user/profile');
		} 
		return res.render('login', {
			errors: {
				email: {
					msg: 'Las credenciales son inválidas'
				},
				password:{
					msg: 'La contraseña no es correcta'
				}
			}
		});
	}
	return res.render('login', {
		errors: {
			email: {
				msg: 'No se encuentra este email en nuestra base de datos'
			},
		}
	});
}

module.exports = postLogin;