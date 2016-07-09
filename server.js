var express = require('express');
var path = require('path');
var app = express()
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/client')));

// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/client/index.html');
// });

app.listen(port, function () {
  console.log(__dirname);
  console.log('Example app listening on port ' + port);
});
