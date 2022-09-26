const express = require('express');
const userController = require('../controllers/login.controller');
const { loginValidade } = require('../middleawres/user.middleware');

const router = express.Router();

router.post('/', loginValidade, userController.getUser);

module.exports = router;