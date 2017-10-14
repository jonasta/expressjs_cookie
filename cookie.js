var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();


app.use(cookieParser('This is my passphrase'));

app.get('/', function (req, res) {
  if (req.cookies.myCookie === 'yes') {
    res.send('cookie set');
  } else {
    res.cookie('myCookie', 'yes');
    res.send('cookie NOT set');
  }
});

app.get('/clear', function (req, res) {
  res.clearCookie('myCookie');
  res.redirect('/');
})


app.listen(4000);