const express = require('express')
const router = express.Router();

const { getItems } = require('../controllers/item');

router.get('/item', getItems);

module.exports = router;