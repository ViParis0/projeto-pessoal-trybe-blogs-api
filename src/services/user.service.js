const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const getUsers = async () => {
    const result = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return result;
};

const createUser = async ({ displayName, email, password, image }) => {
    const result = await User.findOne({
        where: { email },
        attributes: { exclude: ['password'] },
    });

    const errorMessage = { status: 409, message: 'User already registered' };
    if (result) {
        throw errorMessage;
    }

    await User.create({ displayName, email, password, image });

    const token = generateToken({ displayName, email, password, image });

    return token;
};

module.exports = {
    createUser,
    getUsers,
};