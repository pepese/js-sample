const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('api works! /api accessed!');
});

module.exports = router;
