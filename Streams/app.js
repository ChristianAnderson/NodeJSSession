const http = require('http'); // http module
const fs = require('fs');  // file Stream module

var file = fs.createReadStream("thestrokes.mp3"); // read Stream Created

http.createServer(function(request, response){
    var newFile = fs.createWriteStream("readme_copy.md"); // Write Stream created
    
    var fileBytes = request.headers['content-length'];  // Save the lenght of the file size
    var uploadedBytes = 0; // save the uploaded bytes from the file starting by Zero
  
    request.on('readable', function(){
        var chunk = null;
        while( null !== (chunk = request.read())){
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            response.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    });

    request.pipe(newFile); // Pipe the request to the new file

    request.on('end', function(){
        response.end('uploaded! ' + request.read());
    });
}).listen(8080);

 console.log("Listening in port 8080");