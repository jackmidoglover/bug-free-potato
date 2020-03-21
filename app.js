var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes');

var app = express();

var PORT = process.env.PORT || "8000";


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/client/build")));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(routes);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

app.listen(process.env.PORT || "8000", () => {
  console.log("✨ You're cooking with gas now girlie ✨");
})
module.exports = app;
