const { BlogPost, PostCategory, Category, User } = require('../models');
const { getCategoryById } = require('./category.service');

const getPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [
            { model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });
    return posts;
};

const getPostById = async ({ id }) => {
    const post = await BlogPost.findOne({
        where: { id },
        include: [
            { model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });

    if (!post) {
        const error = { status: 404, message: 'Post does not exist' };
        throw error;
    }

    return post;
};

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
    getPosts,
    getPostById,
};