const db = require('../../../database/models')

const detailsProducts = (req,res) => {
    let burger = db.Products.findByPk(req.params.id)
        
        .then(function(burger){
            console.log("PASA POR ACAAAAAAAAAAAAAAAAAAAAAAAAAA: " + req.params.id);
            res.render('detalleDelProducto', {burger})
        })
}

module.exports = detailsProducts;