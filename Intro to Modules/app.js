var http = require('http');

var message = "Here a new one for you";
var options = {
    host: 'localhost',
    port: 43683,
    path: '/',
    method: 'POST'
}

var request = http.request(options, (response) =>{
    response.on('data', (data) => {
        console.log(data); // Logs response body
    })
})

request.write("asdf" + message); // begins request 
request.end();