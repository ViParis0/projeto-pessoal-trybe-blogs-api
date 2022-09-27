const { postSchema, postUpdateSchema } = require('../utils/schemas/post.schema');

const postValidate = async (req, res, next) => {
    const { error } = postSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    return next();
};

const postUpdateValidade = async (req, res, next) => {
    const { error } = postUpdateSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    return next();
};

module.exports = {
    postValidate,
    postUpdateValidade,
};