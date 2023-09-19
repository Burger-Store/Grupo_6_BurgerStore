const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Router module
const pageRouter = require('./router/pageRouter');
const productRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');

//Cargar los archivos estaticos
app.use(express.static(path.join(__dirname, '../public')));

//Morgan
app.use(morgan('dev'));

//view engine
app.set('view engine', 'ejs');

//Ruta a Menu
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/src/views/menu.html'));
})

//Ruta a Registro
app.get('/signup', (req,res) => {
    res.sendFile(path.join(__dirname,'/src/views/signup.html'));
})

//Ruta a Detalle de Producto
app.get('/product-detail', (req,res) => {
    res.sendFile(path.join(__dirname,'/src/views/detalleDelProducto.html'));
})

//Ruta a Login
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'/src/views/login.html'));
})

//Ruta a Carrito
app.get('/cart', (req,res) => {
    res.sendFile(path.join(__dirname,'/src/views/carrito.html'));
})

module.exports = app;