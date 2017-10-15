var express = require('express'),
  errorHandler = require('errorhandler');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.send('default');
});

app.get('/other', function (req, res) {
  res.send('other');
});

app.get('/gonewrong', function (req, res) {
  res.render('error-trower');//throw error
});

//404 - page not found
app.use(function (req, res, next) {
  res.status(404);
  res.render('404', {description : 'Not Found!'})
});

//500 - found but error
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.render('error', {description : 'something gone wrong!'})
});

var port = 4000;
console.log('listening on port ' + port);
app.listen(port);