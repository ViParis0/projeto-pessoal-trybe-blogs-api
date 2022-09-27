const postService = require('../services/post.service');

const getPosts = async (req, res, next) => {
    try {
        const posts = await postService.getPosts();
        res.status(200).json(posts);
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

module.exports = {
    createPost,
    getPosts,
};