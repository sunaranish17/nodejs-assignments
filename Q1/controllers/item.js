const Item = require('../models/item');

exports.getItems = (req, res) => {
    Item.find({})
        .exec((error, items) => {
            if (error) return res.status(400).json({ error });

            if (items) {
                res.status(200).json({ items });
            }
        });
};