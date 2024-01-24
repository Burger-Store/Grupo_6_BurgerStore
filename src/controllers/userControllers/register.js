const countries = require('../../data/countries.json')
const register = (req,res) => {
    console.log(typeof countries.paises);
    res.render('register',{countries: countries.paises});
}

module.exports = register;