var express = require('express')
var app = express()
var port = process.env.PORT || 8000;

app.use(express.static('client'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
