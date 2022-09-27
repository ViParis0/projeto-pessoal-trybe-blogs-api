const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().min(5).required().messages({
        'any.required': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
    }),
});

module.exports = {
    loginSchema,
};