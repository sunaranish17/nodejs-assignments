const express = require('express');
const {getArticle, getArticleWithComments, getArticlesOfAuthor, getComments} = require('../controllers/article');
const router = express.Router();

router.get('/articles/:id', getArticle);
router.get('/articles/:id/comments', getComments);
router.get('/articles', getArticleWithComments);
router.get('/articles/author/:id', getArticlesOfAuthor);

module.exports = router;