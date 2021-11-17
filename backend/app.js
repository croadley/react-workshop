var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express'); // import the library
var indexRouter = require('./routes/index'); // import the router module
var cors = require('cors');

var app = express(); // create the express object

// server configuration
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/todos', indexRouter); // load the router module

module.exports = app;
