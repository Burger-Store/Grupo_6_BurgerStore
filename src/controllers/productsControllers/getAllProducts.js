//const products = require('../../database/products.json');
const db = require('../../../database/models')
const path = require('path');

const getAllProducts = (req,res) => {
    
    db.Burger.findAll()
        .then(function(burger){
            res.render(ruta,{allProducts: burger})
        })
        const ruta = path.join(__dirname,'../../views/products.ejs');
    //console.log(ruta);
    //res.render(ruta,{allProducts: products})
    //res.send(products);
}

module.exports = getAllProducts;