const { categorySchema } = require('../utils/schemas/category.schema');

const categoryValidate = async (req, res, next) => {
    const { error } = categorySchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    return next();
};

module.exports = {
    categoryValidate,
};