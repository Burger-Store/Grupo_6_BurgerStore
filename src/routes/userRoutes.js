const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const { getAllUsers, getUserById, editUser, login, register, postLogin, postRegister, profile, logout } = require('../controllers/userControllers');

// Middlewares
const uploadImgUser = require('../middlewares/multerUserMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const validateLogin = require ('../middlewares/validateLogin');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/users', getAllUsers);      //ruta a vista de todos los usuarios
router.get('/users/:id', getUserById);      //ruta a editar un usuario (profile)

// Formulario de registro
router.get('/signup', guestMiddleware, register);

// Procesar el registro
router.post('/signup', uploadImgUser.single('image'), validations, postRegister);

// Formulario de login
router.get('/login', guestMiddleware, login);

// Procesar el login
router.post('/login', validateLogin, postLogin);

// Perfil de Usuario
router.get('/userProfile', authMiddleware, profile);

// Logout
router.get('/logout/', logout);

router.put('/users/:id/edit', uploadImgUser.single('image'), validations, editUser);       //put de edicion de un usuario

module.exports = router;