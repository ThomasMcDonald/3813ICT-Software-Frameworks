var express = require('express')
var bodyParser = require('body-parser')


var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http);
var bodyPaser = bodyParser.json()
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/chat/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyPaser);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('send-message', function(msg){
    io.emit('message',msg);
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


var server = http.listen(port, function () {
    var host = server.address().address;
    console.log("Server listening on: "+ host + " port: " + port);
});
