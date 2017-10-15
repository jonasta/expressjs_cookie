var express = require('express'),
  basicauth = require('basicauth-middleware');

var app = express();

app.use(basicauth('user', 'pass'));

app.get('/', function (req, res) {
  res.send('authorized section');
});

app.listen(4100);