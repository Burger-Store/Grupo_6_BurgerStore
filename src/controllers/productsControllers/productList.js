const db = require('../../../database/models')
const path = require('path');

const productList = (req,res) => {
    db.Burger.findAll()
        .then(function(burger){
            res.render(productList,{allProducts: burger})
        })
}
module.exports = productList;