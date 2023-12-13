const db = require('../../../database/models')

const detailsProducts = (req,res) => {
    let burger = db.Products.findByPk(req.params.id)
        
        .then(function(burger){
            res.render('detalleDelProducto', {burger})
        })
}

module.exports = detailsProducts;