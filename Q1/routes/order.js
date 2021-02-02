const express = require('express');
const { placeOrders } = require('../controllers/order');

const router = express.Router();

router.post('/items/order', placeOrders);

module.exports = router;