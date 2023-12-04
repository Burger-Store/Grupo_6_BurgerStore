const express = require('express');
const morgan = require ('morgan');
var methodOverride = require('method-override');
const session = require ('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const server = express();
//const Sequelize = require('sequelize');
const { Sequelize } = require('../database/models');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

server.set ('views' , path.join ( __dirname, 'views'))
// const menuRoutes = require ('./routes/menuRoutes')

server.use(morgan('dev'));

//Configurar EJS
server.set('view engine', 'ejs');

//Cargar los archivos estaticos
server.use(express.static('public'));

//manejar data desde un formulario html
server.use(express.urlencoded({extended: false}));
server.use(express.json());

//configuración de session
server.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

//permite el uso de cookies para guardar sesion.
server.use(cookies());

server.use(userLoggedMiddleware);

//reconoce put y delete como tal
server.use(methodOverride('_method'));

const homeRoute = require ('./routes/homeRoute')
const menuRoute = require ('./routes/menuRoute')
const loginRoute = require ('./routes/loginRoute')
const signupRoute = require ('./routes/signupRoute')
const detalleRoute = require ('./routes/detalleRoute')
const carritoRoute = require ('./routes/carritoRoute')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');



//Rutas de acceso a web
// Ruta al Home
server.use (homeRoute)
//Ruta a Login
server.use (loginRoute)
// Ruta a Menu
server.use(menuRoute); 
// Ruta Registro
server.use(signupRoute);
// Ruta a Detalle del Producto
server.use(detalleRoute); 
// Ruta Carrito
server.use(carritoRoute);
// Ruta a usuarios
server.use(userRoutes);
// Ruta a productos
server.use('/product/',productRoutes);

//middleware de error
server.use((req,res,next) => {
    res.render(path.join(__dirname,'./views/404notfound'), {message: 'Recurso no encontrado'});
    next();
})

module.exports = server;