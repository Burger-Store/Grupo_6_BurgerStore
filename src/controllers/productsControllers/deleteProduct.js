const db = require('../../../database/models');

const deleteProduct = (req,res) => {
    db.Products.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/products');
}

module.exports = deleteProduct;