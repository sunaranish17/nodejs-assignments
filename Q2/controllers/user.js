const User = require('../model/user');
const jwt = require('jsonwebtoken');

exports.signIn = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({ error });
            }

            if (user) {
                const token = jwt.sign({_id: user._id}, 'some secret key', {expiresIn: '1d'});

                const {_id, name} = user;

                res.status(200).json({
                    token,
                    user: {_id, name}
                });
            }
        })
}