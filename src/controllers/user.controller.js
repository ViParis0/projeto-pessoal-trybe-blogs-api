const userService = require('../services/user.service');

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

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
    getUsers,
};