var express = require('express'),
  bodyParser = require('body-parser'),
  util = require('util'),
  session = require('express-session');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

var authenticator = function (req, res, next) {
  if (req.session.user && req.session.user.authenticaded) {
    next()
  } else {
    res.redirect('/login');
  }
};


app.route('/login')

  .get(function (req, res) {
    res.render('login');
  })

  .post(function (req, res) {
    if (req.body.username === req.body.password) {
      req.session.user = {username: req.body.username, password: req.body.password, authenticaded: true}
      res.redirect('/private');
    }else{
      res.redirect('/login');
    }
  });


app.get('/private', authenticator, function (req, res) {
  res.send('private');
});

app.get('/public', function (req, res) {
  res.send('public');
});


app.listen(4100);