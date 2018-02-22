var http = require('http'),
hello = require('./custom-hello.js');

http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/html'});
response.write("Dogs are running ");
setTimeout(function(){ // Running time example
    response.write(" Dog is going weldl");
    hello("ese men");
    response.end();
}, 400);
}).listen(8080);

console.log("Running in port 8080");