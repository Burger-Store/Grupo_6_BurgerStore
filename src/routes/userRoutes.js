const express = require('express');

const router = express.Router();

const { getUserById } = require('../controllers/userControllers');

//router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users/:id/edit', )

module.exports = router;