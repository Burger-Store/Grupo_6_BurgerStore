const db = require('../../../database/models')

const editProductForm = async (req,res) => {
    try {
        const burger = await db.products.findByPk(req.params.id);
        const categoria = await db.category.findAll();
        res.render('editProduct',{burger, categoria});
    } catch (error) {
        res.send(error)
    }
    
    /*db.products.findByPk(req.params.id)
        .then(function(burger) {
            return db.category.findAll();
        })
        .then(function(categoria) {
            /*res.render('editProduct', { burger: burger, category: categoria })*/
            /*res.send({burger, categoria})
        })*/
        /*.catch((error) => res.send(error))*/
    
}

module.exports = editProductForm;