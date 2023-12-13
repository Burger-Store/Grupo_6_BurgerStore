const db = require('../../../database/models')

const detailsProducts = (req,res) => {
    let burger = db.Products.findByPk(req.params.id)
        .then(function(burger){
            res.render('detalleDelProducto', {burger: burger})
        })
        .catch(function(e){
            res.send('El producto no existe')
        })
}

module.exports = detailsProducts;