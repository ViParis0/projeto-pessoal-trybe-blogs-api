const { Category } = require('../models');

const getCategories = async () => {
    const result = await Category.findAll();
    return result;
};

const createCategory = async ({ name }) => {
    const result = await Category.create({ name });
    return result;
};

module.exports = {
    createCategory,
    getCategories,
};