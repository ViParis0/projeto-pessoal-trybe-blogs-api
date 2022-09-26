const userService = require('../services/user.service');

const createUser = async (req, res, next) => {
    try {
        const token = await userService.createUser(req.body);
        res.status(201).json({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
};