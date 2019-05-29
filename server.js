var http = require('http');
var fs = require('fs');
var server = http.createServer();
var setting = require('./settings.js');
var msg;

server.on('request', function (req, res) {
   fs.readFile(__dirname + '/hello.html', 'utf-8', function (err, data) {
      if (err) {
         res.writeHead(404, { 'Content-Type': 'text/plain' });
         res.write('Not Found');
         return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
   });
});

server.listen(setting.port, setting.host);