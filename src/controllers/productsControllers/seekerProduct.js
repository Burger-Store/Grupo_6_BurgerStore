const db = require('../../../database/models');
const { Op } = require('sequelize');

const seekerProduct = async (req,res) => {
    const consulta = req.query.search
    const burger = await db.products.findAll({ 
        where: {
            name:{ [Op.like]: `%${consulta}%` }
        } 
    })
    if (burger.length == 0) {
        res.render('searchNotFound', {message: `${consulta} Not Found!`});
    } else {
        res.render('search', {burger})
    }
}

module.exports = seekerProduct;