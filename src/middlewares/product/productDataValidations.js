const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().withMessage('Este campo no debe estar vacio'),
	body('description').notEmpty().withMessage('Este campo no debe estar vacio'),
	body('price').notEmpty().withMessage('Este campo no debe estar vacio')
    .isInt().withMessage('Unicamente se valores numericos'),
    body('category').notEmpty().withMessage('Este campo no debe estar vacio'),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	})
]