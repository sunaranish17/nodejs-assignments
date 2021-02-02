const Order = require('../models/item');

exports.placeOrders = (req, res) => {
    const newOrder = new Order({
        id: req.body,
        orderedBy: req.user._id
    });

    newOrder.save((error, order) => {
        if (error) return res.status(400).json({ error });

        if (cart) {
            return res.status(200).json({ order });
        }
    })
};