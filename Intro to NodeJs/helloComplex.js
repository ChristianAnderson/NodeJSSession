var http = require('http');
var counter = 0;

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write("Dogs are running ");
    console.log("Entered: " + counter);
    counter++;
    setTimeout(function(){ // Running time example
        response.write(" Dog is going well");
        response.end();
    }, 100);
}).listen(8080);

console.log("Running in port 8080");