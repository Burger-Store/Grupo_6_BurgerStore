const db = require('../../../database/models');

const editProduct = (req, res) => {
    const product = db.products.findByPk(req.params.id)
    db.products.update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        idcategory: req.body.category,
        image: req.file ? req.file.filename : product.image
    },{
        where:{
            idproducts: req.params.id
        }
    })
    res.redirect('/product')
}

module.exports = editProduct;