const mongoose = require('mongoose');


//Article schema 
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true
    },
    comments: [
        {
            postedBy: String,
            body: String
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);