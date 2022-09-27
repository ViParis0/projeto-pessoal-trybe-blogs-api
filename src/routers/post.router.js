const express = require('express');
const postController = require('../controllers/post.controller');
const { postValidate, postUpdateValidade } = require('../middleawres/post.middleware');
const { tokenValidate } = require('../middleawres/token.middleware');

const router = express.Router();

router.get('/', tokenValidate, postController.getPosts);
router.get('/:id', tokenValidate, postController.getPostById);
router.post('/', tokenValidate, postValidate, postController.createPost);
router.put('/:id', tokenValidate, postUpdateValidade, postController.updatePost);
router.delete('/:id', tokenValidate, postController.deletePost);

module.exports = router;