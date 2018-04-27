var express = require('express'); //instance
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
    console.log('Client Connected');
    // client.emit('messages', {hello: 'Hello world'});

    client.on('messages', function(data){ // listen for messages event
        console.log(data);
        client.broadcast.emit("messages", data);
        console.log(data);
    })

});


// var counter = 0;
app.get('/', function(request, response){
    // counter++;
    response.sendFile(__dirname + "/index.html");
    // console.log(counter);
})

server.listen(8080);