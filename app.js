var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes');

var app = express();

var PORT = process.env.PORT || "8000";


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/client/build")));

app.use(function(err, req, res, next) {
  next(createError(404));
});

app.use('*', indexRouter);

app.listen(PORT, () => {
  console.log("✨ You're cooking with gas now girlie ✨");
})
module.exports = app;
