function getUserByEmail(email) {
    const users = require('../../database/users.json');
    return users.find((user) => user.email == email);
}
module.exports = getUserByEmail;