const express = require('express');
const router = express.Router();

router.get('/', require('./get_index'));
//router.get('/users', require('./get_users'));

module.exports = router;
