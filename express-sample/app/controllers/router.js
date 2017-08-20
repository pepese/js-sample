const express = require('express');
const router = express.Router();

router.get('/', require('./get_index'));
router.get('/users', require('./get_users'));
// 以下、DB接続用サンプル
router.get('/clients', require('./get_clients'));

module.exports = router;
