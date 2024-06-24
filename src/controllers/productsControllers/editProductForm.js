const db = require('../../../database/models')

const editProductForm = async (req,res) => {
    try {
        const burger = await db.products.findByPk(req.params.id);
        const categoria = await db.category.findAll();
        res.render('editProduct', {burger, categoria});
    } catch (error) {
        res.send(error)
    }   
}

module.exports = editProductForm;