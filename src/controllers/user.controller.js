const userService = require('../services/user.service');

const getUser = async (req, res, next) => {
   const token = await userService.getUser(req.body);
   try {
    res.status(201).json({ token });
   } catch (error) {
    next(error);
   }
};

module.exports = {
    getUser,
};