var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

console.log('requires done');

var app = express();


var routes = require('./routes/index');
app.use('/', routes);

var users = require('./routes/users');
app.use('/users', users);

var records = require('./routes/records.js');
app.use('/records', records)

mongoose.connect('mongodb://localhost/recordsdb');
db = mongoose.connection;

db.on('connected', function(){
  console.log("you've connected, sweet");
})

console.log('db connections done');


var Record = require('./models/record.js');

var p = new Record({name: "Back in Black", band: "ACDC"}).save;
console.log(p)
console.log('end of the page');

app.use(function(request, response, next){
  console.log("request received via %s at %s", request.method, request.url);
  console.log("request body is:", request)
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



app.listen(3000);


module.exports = app;
