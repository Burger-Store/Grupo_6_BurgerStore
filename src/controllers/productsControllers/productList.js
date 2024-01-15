const db = require('../../../database/models')

const productList = (req,res) => {
    db.products.findAll() 
        .then(function(burger){
            res.render('productPanel',{burger: burger})
        })
}
module.exports = productList;