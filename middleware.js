var express = require('express'),
  util = require('util');

var app = express();

var globalInterceptor = function (req, res, next) {
  console.log(util.format('global interceptor %s', req.path));
  next();
};

var singleInterceptor = function (req, res, next) {
  console.log(util.format('single interceptor %s', req.path));
  next();
};

app.use(globalInterceptor);


app.get('/', function (req, res) {
  res.send('default');
});

app.get('/other', singleInterceptor, function (req, res) {
  res.send('default');
});


app.listen(4000);