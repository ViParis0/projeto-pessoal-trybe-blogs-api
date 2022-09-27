const { Category } = require('../models');

const getCategories = async () => {
    const result = await Category.findAll();
    return result;
};

const getCategoryById = async (id) => {
    const result = Category.findByPk(id);
    return result;
};

const createCategory = async ({ name }) => {
    const result = await Category.create({ name });
    return result;
};

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
};