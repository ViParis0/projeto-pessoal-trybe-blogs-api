const { userLoginSchema } = require('../utils/schemas/user.schema');

const loginValidade = (req, res, next) => {
    const { error } = userLoginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    return next();
};

module.exports = {
    loginValidade,
};