var path = require('path');
var express = require('express');

var hostUrl = 'http://localhost:3001/';
var app = express();

app.use(express.static(path.resolve(__dirname, '../public/')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/', 'index.html'))
});

app.listen(3001, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Web server listening at ' + hostUrl + '.');
});
