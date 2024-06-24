const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const editUser = require('./editUser');
const login = require('./login');
const register = require('./register');
const postLogin = require('./postLogin');
const postRegister = require('./postRegister');
const profile = require ('./profile')
const logout = require('./logout')
const deleteUser = require('./deleteUser');

module.exports = {
    getAllUsers,
    getUserById,
    editUser,
    login,
    register,
    postLogin,
    postRegister,
    logout,
    profile,
    deleteUser
}