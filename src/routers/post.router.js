const express = require('express');
const postController = require('../controllers/post.controller');
const { postValidate } = require('../middleawres/post.middleware');
const { tokenValidate } = require('../middleawres/token.middleware');

const router = express.Router();

router.get('/', tokenValidate, postController.getPosts);
router.post('/', tokenValidate, postValidate, postController.createPost);

module.exports = router;