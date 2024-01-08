const db = require('../../../database/models');

const deleteProduct = (req,res) => {
    console.log(req.params.id);
    db.Products.destroy({
        where:{
            idproducts: req.params.id
        }
    })
    .then(function (){
        res.redirect('/product/');
    })
    .catch(function (e){
        res.send(e);
    })
}

module.exports = deleteProduct;