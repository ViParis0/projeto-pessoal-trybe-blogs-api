const postService = require('../services/post.service');

const getPosts = async (req, res, next) => {
    try {
        const posts = await postService.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

const findPost = async (req, res, next) => {
    try {
        const posts = await postService.findPost(req.query);
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const post = await postService.getPostById(req.params);
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const post = await postService.createPost(req.body, req.user);
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const post = await postService.updatePost(req.body, req.params, req.user);
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

const deletePost = async (req, res, next) => {
    try {
         await postService.deletePost(req.params, req.user);
         res.status(204).json();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    findPost,
};