var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var PORT = process.env.PORT || "8000";


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build/index.html")));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});


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
