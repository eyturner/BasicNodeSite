var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  var filename = getFileName(req.url)

  fs.readFile(filename, function(err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    return res.end();
  });
}).listen(8080);

const getFileName = urlData => {
  switch(urlData) {
    case "/":
      return './index.html';
    case "/about":
      return './about.html';
    case "/contact":
      return './contact.html';
    default:
      return './404.html'
  }
}
