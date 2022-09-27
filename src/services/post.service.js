const { BlogPost, PostCategory } = require('../models');
const { getCategoryById } = require('./category.service');

const createPost = async ({ title, content, categoryIds }, { id }) => {
    const categories = await Promise.all(categoryIds.map((value) => getCategoryById(value)));
    if (categories.some((cate) => cate === null)) {
        const error = { status: 400, message: '"categoryIds" not found' };
        throw error;
    }
    const result = await BlogPost.create({ title, content, userId: id });
     await Promise.all(categoryIds
        .map((value) => PostCategory.create({ categoryId: value, postId: result.dataValues.id })));
    return result;
};

module.exports = {
    createPost,
};