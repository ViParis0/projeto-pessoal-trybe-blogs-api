const { authTokenValidation } = require('../utils/JWT');

const tokenValidate = (req, res, next) => {
    const { authorization } = req.headers;
    const payload = authTokenValidation(authorization);
    req.user = payload;

    next();
};

module.exports = {
    tokenValidate,
};