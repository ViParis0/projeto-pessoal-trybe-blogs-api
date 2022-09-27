const categoryService = require('../services/category.service');

const getCategories = async (req, res, next) => {
    try {
        const result = await categoryService.getCategories();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const createCategory = async (req, res, next) => {
    try {
        const result = await categoryService.createCategory(req.body);
    res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCategory,
    getCategories,
};