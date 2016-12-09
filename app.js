'use strict';

let express = require('express');
let path = require('path');

let index = require('./routes/index');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'));

app.use('/', index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res) {
  res.render('home');
});

console.log('app started (:');

module.exports = app;
