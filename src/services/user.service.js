const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const getUser = async ({ email, password }) => {
    const result = await User.findOne({
        where: { email, password },
        attributes: { exclude: ['password'] },
    });

    const token = generateToken(result.dataValues);

    return token;
};

module.exports = {
    getUser,
};