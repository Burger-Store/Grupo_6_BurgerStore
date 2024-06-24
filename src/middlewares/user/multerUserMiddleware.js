const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../../../public/img/users'));
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}_user${path.extname(file.originalname)}`);
	}
});

const uploadImgUser = multer({ storage });

module.exports = uploadImgUser;