var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var http = require('http').Server(app)
var bodyPaser = bodyParser.json()
var port = process.env.PORT || 8080;
var username = "asd@gmail.com"
var password = "123"
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyPaser);
app.get('/', function(req,res){
    res.sendFile(__dirname + "/www");
});


app.get('/account', function(req,res){
    res.sendFile(__dirname + "/www/account.html");
});

app.post('/loginAuth', function (req, res) {
  console.log(req.body);
  if(req.body.username == username && req.body.password == password){
    res.send({
      "ok":true
    })
  } else{
    res.send({
      "ok":false
    })
  }


});


var server = http.listen(port, function () {
    var host = server.address().address;
    console.log("Server listening on: "+ host + " port: " + port);
});
