'use strict';
const express = require('express');
var cors = require('cors')
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
const serveStatic = require('serve-static')
const secure = require('express-force-https');
var PORT = process.env.PORT || 8080;

var createProddy = require(path.resolve( __dirname,'server/create.js'));
var addProddy = require(path.resolve( __dirname,'server/add.js'));
var readProddy = require(path.resolve( __dirname,'server/read.js'));
var removeProddy = require(path.resolve( __dirname,'server/remove.js'));
var updateProddy = require(path.resolve( __dirname,'server/update.js'));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/week8');
const app = module.exports = express();

app.use(secure)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

 addProddy.add("Apple 0", 72, "Fruit", "big and red");
 addProddy.add("Apple 1", 72, "Fruit", "big and red");
 addProddy.add("Apple 2", 72, "Fruit", "big and red");

//removeProddy.remove("Apple 0");

//updateProddy.update("Apple 1", "Apple 42")

//readProddy.get();

app.listen(PORT);
console.log('Listening on ' + PORT);
