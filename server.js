var express = require('express')
var app = express()
var port = process.env.PORT || 8000;
console.log(__dirname + '/client');
app.use(express.static(__dirname + '/client'));

// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/client/index.html');
// });

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
