const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

const { Op } = Sequelize;
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

const findPost = async ({ q }) => {
    const result = await BlogPost.findAll({
        // { title: { [Op.substring]: q },
        // { content: { [Op.substring]: q },
        where: { [Op.or]: [
            { title: { [Op.substring]: q } },
           { content: { [Op.substring]: q } },
         ] },
        include: [
            { model: Category, as: 'categories', through: { attributes: [] } },
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],        
    });
    return result;
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

const updatePost = async ({ title, content }, { id }, user) => {
    const post = await getPostById({ id });
    if (!post) {
        const error = { status: 404, message: 'Post does not exist' };
        throw error;
    }
    if (post.userId !== user.id) {
        const error = { status: 401, message: 'Unauthorized user' };
        throw error;
    }
    await BlogPost.update({ title, content }, { where: { id } });
    const newPost = await getPostById({ id });
    return newPost;
};

const deletePost = async ({ id }, user) => {
    const post = await getPostById({ id });
    if (!post) {
        const error = { status: 404, message: 'Post does not exist' };
        throw error;
    }

    if (post.userId !== user.id) {
        const error = { status: 401, message: 'Unauthorized user' };
        throw error;
    }

    await BlogPost.destroy({ where: { id } });
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    findPost,
};