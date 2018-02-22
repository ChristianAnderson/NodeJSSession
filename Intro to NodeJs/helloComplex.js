var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Dogs are running ");
    setTimeout(function(){ // Running time example
        response.write(" Dog is going weldl");
        response.end();
    }, 100);
}).listen(8080);

console.log("Running in port 8080");