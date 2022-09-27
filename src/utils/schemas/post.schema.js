const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().min(5).required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    content: Joi.string().min(5).required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    categoryIds: Joi.array().min(1).required().messages({
        'array.empty': '"categoryIds" not found',
    }),
});

const postUpdateSchema = Joi.object({
    title: Joi.string().min(5).required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    content: Joi.string().min(5).required().messages({
        'string.empty': 'Some required fields are missing',
    }),
});

module.exports = {
    postSchema,
    postUpdateSchema,
};