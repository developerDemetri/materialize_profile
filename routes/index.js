'use strict';

let app = require('../app');
let express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
  res.render('home');
});

module.exports = router;
