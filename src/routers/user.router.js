const express = require('express');
const userController = require('../controllers/user.controller');
const { tokenValidate } = require('../middleawres/token.middleware');
const { userValidate } = require('../middleawres/user.middleware');

const router = express.Router();

router.get('/', tokenValidate, userController.getUsers);

router.get('/:id', tokenValidate, userController.getUserById);

router.post('/', userValidate, userController.createUser);

router.delete('/me', tokenValidate, userController.deleteUser);

module.exports = router;