const mongoose = require('mongoose');


//Orders schema 
const orderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);