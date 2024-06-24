const db = require('../../../database/models');
const createProductForm = async (req,res) => {
    try {
        let categoria = await db.category.findAll();
        res.render('createProduct', {categoria});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
module.exports = createProductForm;