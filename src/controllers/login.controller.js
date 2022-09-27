const userService = require('../services/login.service');

const getUser = async (req, res, next) => {
    try {
       const token = await userService.getUser(req.body);
    res.status(200).json({ token });
   } catch (error) {
    next(error);
   }
};

module.exports = {
    getUser,
};