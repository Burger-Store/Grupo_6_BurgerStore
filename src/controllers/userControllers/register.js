const path = require('path');

const register = (req,res) => {
    const form = path.join(__dirname,'../../views/signup');
    res.render(form);
}

module.exports = register;