/**
 * http://usejsdoc.org/
 */
var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
   
}).listen(1326);

// Console will print the message
console.log('Server running at http://127.0.0.1:1326/');