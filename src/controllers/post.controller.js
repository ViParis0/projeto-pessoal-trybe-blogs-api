const postService = require('../services/post.service');

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
};