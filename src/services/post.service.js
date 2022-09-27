const { BlogPost } = require('../models');

const createPost = async () => {
    const result = await BlogPost.create();
    console.log(result);
};

module.exports = {
    createPost,
};