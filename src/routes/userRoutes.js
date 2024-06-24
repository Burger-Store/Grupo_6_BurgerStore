const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const { getAllUsers, getUserById, login, register, postLogin, postRegister, profile, logout} = require('../controllers/userControllers');
const editUser = require('../controllers/userControllers/editUser')
const deleteUser = require ('../controllers/userControllers/deleteUser')
// Middlewares
const uploadImgUser = require('../middlewares/user/multerUserMiddleware');
const validations = require('../middlewares/user/validateRegisterMiddleware');
const validateLogin = require ('../middlewares/user/validateLogin');
const userInDBMiddleware = require('../middlewares/user/userInDBMiddleware');
const guestMiddleware = require('../middlewares/user/guestMiddleware');
const authMiddleware = require('../middlewares/user/authMiddleware');
const adminMiddleware = require('../middlewares/user/adminMiddleware');
const userEditMiddleware = require('../middlewares/user/userEditMiddleware');
/*const userLoggedMiddleware = require('../middlewares/user/userLoggedMiddleware');*/


//localhost:3001/user/
//LISTADO
router.get('/', adminMiddleware, getAllUsers);      // ADMIN ruta a vista de todos los usuarios
//formulario de registro - CREATE
router.get('/register', guestMiddleware, register);
router.post('/register', uploadImgUser.single('image'), userInDBMiddleware, postRegister);
//EDIT USER 
router.get('/update/:id', authMiddleware, userEditMiddleware, getUserById); 
router.put('/update/:id', uploadImgUser.single('image'), validations, editUser);  
// Formulario de login
router.get('/login', guestMiddleware, login);
router.post('/login', validateLogin, postLogin);
// Perfil de Usuario - READ
router.get('/profile', authMiddleware, profile);
// Eliminar usuario - DELETE
router.delete('/:id/delete', authMiddleware, deleteUser);
// Logout
router.get('/logout', logout);


module.exports = router;





