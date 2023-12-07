function getUserByEmail(email) {
    const db = require('../../../database/models');
    return users.find((user) => user.email == email);
}
module.exports = getUserByEmail;