var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('express.start');
});

app.listen(4000);