var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

// var server = http.createServer(function(request, response){
//     var path = url.parse(request.url).pathname;

//     switch(path){
//         case '/':
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write('hello world');
//             response.end();
//             break;
//         case '/index.html':
//             fs.readFile(__dirname + path, function(error, data){
//                 if (error){
//                     response.writeHead(404);
//                     response.write("opps this doesn't exist - 404");
//                     response.end();
//                 }
//                 else{
//                     response.writeHead(200, {"Content-Type": "text/html"});
//                     response.write(data, "utf8");
//                     response.end();
//                 }
//             });
//             break;
//         default:
//             response.writeHead(404);
//             response.write("opps this doesn't exist - 404");
//             response.end();
//             break;
//     }
// });

// server.listen(8001);

// io.listen(server);
// var listener = io.listen(server);
// listener.sockets.on('connection', function(socket){
//     socket.emit('message', {'message': 'hello world'});
    
//     //send data to client
//     setInterval(function(){
//         socket.emit('date', {'date': new Date()});
//     }, 1000);

//     //recieve client data
//  	socket.on('client_data', function(data){
//     process.stdout.write(data.letter);
//   });
// });

'use strict';
angular.module('LoopbackSocketIntegration')
 
//Here LoopBackAuth service must be provided as argument for authenticating the user
.factory('socket', function(LoopBackAuth){
    //Creating connection with server
    var socket = io.connect('http://localhost:3000');
 
    //This part is only for login users for authenticated socket connection between client and server.
    //If you are not using login page in you website then you should remove rest piece of code..
    var id = LoopBackAuth.accessTokenId;
    var userId = LoopBackAuth.currentUserId;
    socket.on('connect', function(){
        socket.emit('authentication', {id: id, userId: userId });
        socket.on('authenticated', function() {
            // use the socket as usual
            console.log('User is authenticated');
        });
    });
  return socket;
     
});




