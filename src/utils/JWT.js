const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '24h',
    algorithm: 'HS256',
};

const { JWT_SECRET } = process.env;

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

const authTokenValidation = (token) => {
    if (!token) {
        const e = new Error('Token not found');
        e.status = 401;
        throw e;
    }

    try {
        const instrospection = jwt.verify(token, JWT_SECRET);
        return instrospection;
    } catch (e) {
        const err = new Error('Expired or invalid token');
        err.status = 401;
        throw err;
    }
};

module.exports = {
    generateToken,
    authTokenValidation,
};