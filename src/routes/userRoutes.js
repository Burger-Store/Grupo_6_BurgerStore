const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const { getAllUsers, getUserById, login, register, postLogin, postRegister,profile, editUser, logout, deleteUser } = require('../controllers/userControllers');

// Middlewares
const uploadImgUser = require('../middlewares/multerUserMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const validateLogin = require ('../middlewares/validateLogin');
const userInDBMiddleware= require ('../middlewares/userInDBMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const userEditMiddleware = require('../middlewares/UserEditMiddleware');


//localhost:3001/user/
router.get('/', guestMiddleware, getAllUsers);      // ADMIN ruta a vista de todos los usuarios
router.post('/:id', guestMiddleware, getUserById);      // ADMIN ruta a editar un usuario (profile)

// Formulario de registro - CREATE
router.get('/register', register);
router.post('/register', uploadImgUser.single('image'), postRegister); // validations, userInDBMiddleware,

// Formulario de login
router.get('/login', guestMiddleware, login);
router.post('/login', validateLogin, postLogin);

// Perfil de Usuario - READ
router.get('/profile', authMiddleware, profile);
// Eliminar usuario - DELETE
router.post('/delete/:id', adminMiddleware, deleteUser);

// Edicion de propio usuario - UPDATE
router.get('/:id', authMiddleware, userEditMiddleware, getUserById); 
router.put('/edit/:id', uploadImgUser.single('image'), validations, editUser);       //put de edicion de un usuario

// Logout
router.get('/logout/', logout);
module.exports = router;

