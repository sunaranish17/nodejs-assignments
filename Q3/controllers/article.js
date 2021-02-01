const Article = require('../models/article');

exports.getComments = (req, res) => {
    Article.find({})
        .exec((error, articles) => {
            if (error) return res.status(400).json({ error });

            if (articles) {
                const comments = articles.comments;
                return res.status(200).json({ comments });
            }
        });
};

exports.getArticle = (req, res) => {
    Article.findOne({ _id: req.params.articleId })
        .populate("postedBy", "_id")
        .exec((error, article) => {
            if (error) return res.status(400).json({ error });

            if (article) {
                return res.status(200).json({ article });
            }
        });
}

exports.getArticleWithComments = (req, res) => {
    Article.find({})
        .exec((error, articles) => {
            if (error) return res.status(400).json({ error });

            if (articles) {
                const comments = articles.comments;
                if (comments.length >= 1) {
                    return res.status(200).json({ articles });
                } else {
                    return res.status(204).json({ message: "No content" });
                }
            }
        });
}

exports.getArticlesOfAuthor = (req, res) => {
    Article.find({ _id: req.body.authorId })
        .exec((error, result) => {
            if (error) return res.status(400).json({ error });

            if (result) {
                return res.status(200).json({ result });
            }
        });
}