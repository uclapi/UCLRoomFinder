var express = require('express');
var app = express();

var express = require('express');
var app = express();

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
	console.log('Listening on port ' + port);
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
