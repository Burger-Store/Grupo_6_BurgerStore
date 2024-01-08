const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const { getAllUsers, getUserById, login, register, postLogin, postRegister, profile, logout} = require('../controllers/userControllers');
const editUser = require('../controllers/userControllers/editUser')
const deleteUser = require ('../controllers/userControllers/deleteUser')
// Middlewares
const uploadImgUser = require('../middlewares/multerUserMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const validateLogin = require ('../middlewares/validateLogin');
const userInDBMiddleware = require('../middlewares/userInDBMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const userEditMiddleware = require('../middlewares/UserEditMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const signupController = require('../controllers/signupControllers/signupController');

//localhost:3001/user/
//LISTADO
router.get('/',/*adminMiddleware,*/ getAllUsers);      // ADMIN ruta a vista de todos los usuarios
//formulario de registro - CREATE
router.get('/register', guestMiddleware, register);
router.post('/register', uploadImgUser.single('image'), postRegister)
//EDIT USER 
router.get('/update/:id', authMiddleware, userEditMiddleware, getUserById) // o editUser?
router.post('/update/:id', uploadImgUser.single('image'), validations, editUser);  
// Formulario de login
router.get('/login', guestMiddleware, login);
router.post('/login', validateLogin, postLogin);
// Perfil de Usuario - READ
router.get('/profile', /*authMiddleware,*/ profile);
// Eliminar usuario - DELETE
router.delete('/:id/delete', adminMiddleware, deleteUser);
// Logout
router.post('/logout', logout);


module.exports = router;





