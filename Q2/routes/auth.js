const express = require('express');
const { requireLogin } = require('../middlewares/middlewares');
const { signIn } = require('../controllers/user');

const router = express.Router();

router.post('/signin', signIn);

module.exports = router;