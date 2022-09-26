const express = require('express');
const userController = require('../controllers/user.controller');
const { userValidate } = require('../middleawres/user.middleware');

const router = express.Router();

router.post('/', userValidate, userController.createUser);

module.exports = router;