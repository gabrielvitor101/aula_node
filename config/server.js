var express = require('express');
var consing = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

consing().include('app/routes').into(app);

module.exports = app;