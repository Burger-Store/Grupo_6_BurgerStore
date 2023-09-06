const express = require('express');
const path = require('path');
const app = express();

//Server
app.listen(3000, () => console.info('Server arriba'));

//Cargar los archivos estaticos
app.use(express.static(path.resolve(__dirname, './src/public')));

//Rutas de acceso a web

/*app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/src/views/index.html'));
})*/

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
