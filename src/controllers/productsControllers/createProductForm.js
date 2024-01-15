const db = require('../../../database/models');
const createProductForm = (req,res) => {
    let category = db.category.findAll()
    .then(function(category){
        res.render('createProduct', {category});
    })
    
}

module.exports = createProductForm;