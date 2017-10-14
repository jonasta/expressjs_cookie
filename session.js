var express = require('express');
var session = require('express-session')


var app = express();
var RedisStore = require('connect-redis')(session);


app.use(session({store: new RedisStore(), secret: 'this is my secret'}));

app.get('/', function (req, res) {
  req.session.name = req.session.name || new Date().toUTCString();
  console.log(req.sessionID);
  res.send(req.session.name);
});

app.listen(4000);