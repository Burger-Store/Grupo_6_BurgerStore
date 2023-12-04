const db = require('../../../database/models')

const detailsProducts = (req,res) => {
    db.Burger.findByPk(req.params.id)
        .then(function(burger){
            res.render('detalleDelProducto', {detail: burger})
        })
}

module.exports = detailsProducts;