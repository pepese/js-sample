const express = require('express');
const router = express.Router();

router.get('/', require('./get_index'));
router.get('/users', require('./get_users'));
// 以下、DB接続用サンプル
router.get('/clients', require('./get_clients'));
// 以下、HTTP(S)リクエスト用サンプル
router.get('/ip', require('./get_ip'));
// 以下、非同期HTTP(S)リクエスト用サンプル
router.get('/ip_promise', require('./get_ip_promise'));

module.exports = router;
