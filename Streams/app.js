var http = require('http'); // http module
var fs = require('fs');  // file Stream module

var file = fs.createReadStream("readme.md"); // read Stream Created

http.createServer(function(request, response){
    var newFile = fs.createWriteStream("readme_copy.md"); // Write Stream created
    request.pipe(newFile); // Pipe the request to the new file

    request.on('end', function(){
        response.end('uploaded!');
    });
}).listen(8080);

 console.log("Listening in port 8080");