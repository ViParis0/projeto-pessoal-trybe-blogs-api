const express = require('express');
const categoryController = require('../controllers/category.controller');
const { categoryValidate } = require('../middleawres/category.middleware');
const { tokenValidate } = require('../middleawres/token.middleware');

const router = express.Router();

router.post('/', tokenValidate, categoryValidate, categoryController.createCategory);

module.exports = router;