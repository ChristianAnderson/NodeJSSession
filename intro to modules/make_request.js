var http = require('http');

var makeRequest = function(message){
    var options = {
        host: 'localhost',
        port: 8080,
        path: '/',
        method: 'GET'
    };

    var request = http.request(options, (response) =>{
        response.on('data', (data) => {
            console.log(data); // Logs response body
        })
        // console.log(response.statusCode);
    })

    request.write(message); // begins request
    request.end();
}

module.exports = makeRequest;