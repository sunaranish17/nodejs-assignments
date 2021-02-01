const Article = require('../models/article');

exports.getComments = (req, res) => {
    Article.find({})
        .exec((error, articles) => {
            if (error) return res.status(400).json({ error });

            if (articles) {
                const comments = articles.comments;
                return res.status(200).json({ comments });
            }
        })
}; 