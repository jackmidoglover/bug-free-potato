var express = require('express');
var path = require('path');
var logger = require('morgan');
var routes = require('./routes');

var app = express();

var PORT = process.env.PORT || "8000";


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/client/build")));

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

app.listen(process.env.PORT || PORT, () => {
  console.log("✨ You're cooking with gas now girlie ✨");
})
module.exports = app;
