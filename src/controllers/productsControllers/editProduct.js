const db = require('../../../database/models');

const editProduct = (req, res) => {
    db.Products.update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.file.filename,
    },{
        where:{
            id: req.params.id
        }
    })
    res.redirect(`/update/${req.params.id}`)
}

module.exports = editProduct;