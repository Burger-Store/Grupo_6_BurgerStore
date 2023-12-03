const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const { getAllUsers, getUserById, editUser, login, register, postLogin, postRegister,profile, logout, deleteUser } = require('../controllers/userControllers');

// Middlewares
const uploadImgUser = require('../middlewares/multerUserMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const validateLogin = require ('../middlewares/validateLogin');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const userEditMiddleware = require('../middlewares/UserEditMiddleware');



router.get('/users', adminMiddleware, getAllUsers);      // ADMIN ruta a vista de todos los usuarios
router.get('/users/:id', adminMiddleware, getUserById);      // ADMIN ruta a editar un usuario (profile)

// Formulario de registro - CREATE
router.get('/signup', guestMiddleware, register);
router.post('/signup', uploadImgUser.single('image'), validations, postRegister);

// Formulario de login
router.get('/login', guestMiddleware, login);
router.post('/login', validateLogin, postLogin);

// Perfil de Usuario - READ
router.get('/userProfile', authMiddleware, profile);
// Eliminar usuario - DELETE
router.post('/delete/:id', deleteUser);

// Edicion de propio usuario - UPDATE
router.get('/user/:id', authMiddleware, userEditMiddleware, getUserById); 
router.put('/users/:id/edit', uploadImgUser.single('image'), validations, editUser);       //put de edicion de un usuario

// Logout
router.get('/logout/', logout);
module.exports = router;