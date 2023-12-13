const db = require('../../../database/models')

const editProductForm = (req,res) => {
    let burger = db.Products.findByPk(req.params.id)
    .then(function(burger){
        res.render('editProduct', {burger: burger})
    })
    .catch(function(e){
        res.send('El producto no existe')
    })
    //traer los datos que estan guardado en la base de datos
    //res.render('editProductForm');
}

module.exports = editProductForm;