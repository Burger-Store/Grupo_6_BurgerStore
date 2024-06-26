const express = require('express');
const morgan = require ('morgan');
var methodOverride = require('method-override');
const session = require ('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const server = express();
const cors = require('cors');
const userLoggedMiddleware = require('./middlewares/user/userLoggedMiddleware');

server.set ('views' , path.join ( __dirname, 'views'))

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

//importante para el manejo de session y cookies
server.use(userLoggedMiddleware);

//reconoce put y delete como tal
server.use(methodOverride('_method'));

const storeRoute = require ('./controllers/productsControllers/productListClient')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');
//Rutas de acceso a web


// Ruta a usuarios
server.use('/user/', userRoutes);
// Ruta a productos
server.use('/product/', productRoutes);
// Ruta al Home
server.use ('/', storeRoute)
//middleware de error
server.use((req,res,next) => {
    res.render(path.join(__dirname,'./views/404notfound'), {message: 'Recurso no encontrado'});
    next();
})

module.exports = server;