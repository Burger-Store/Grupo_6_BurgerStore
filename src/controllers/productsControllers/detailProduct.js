const db = require('../../../database/models')
const path = require('path');

const detailsProducts = (req,res) => {
    db.Burger.findByPk(req.params.id)
        .then(function(Burger){
            res.render('detalleDelProducto', {detail: Burger})
        })
        const ruta = path.join(__dirname,'../../views/products.ejs');
}

module.exports = detailsProducts;