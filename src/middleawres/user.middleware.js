const { loginSchema } = require('../utils/schemas/login.schema');
const { userSchema } = require('../utils/schemas/user.schema');

const loginValidade = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    return next();
};

const userValidate = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    return next();
};

module.exports = {
    loginValidade,
    userValidate,
};