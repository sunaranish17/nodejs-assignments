const jwt = require('jsonwebtoken');

exports.requireLogin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, 'some secret key');
        req.user = user;
    } else {
        return res.status(400).json({message: res});
    }
    next();
};