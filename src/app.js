const express = require('express');
const morgan = require ('morgan')
const path = require('path');
const server = express();
const homeRoute = require ('./routes/homeRoute')
const menuRoute = require ('./routes/menuRoute')
const loginRoute = require ('./routes/loginRoute')
const signupRoute = require ('./routes/signupRoute')
const detalleRoute = require ('./routes/detalleRoute')
const carritoRoute = require ('./routes/carritoRoute')

server.set ('views' , path.join ( __dirname, 'views'))
// const menuRoutes = require ('./routes/menuRoutes')

server.use(morgan('dev'));

//Configurar EJS
server.set('view engine', 'ejs');

//Cargar los archivos estaticos
server.use(express.static('public'));

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

module.exports = server;
