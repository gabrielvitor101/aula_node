var express = require('express');
var consing = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var moment = require('moment');

moment.locale('pt-br');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')


app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.locals.moment = moment;


consing()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

    module.exports = app;