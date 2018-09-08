var path = require('path');
var Proddy = require(path.resolve( __dirname,'models/proddy.js'));

function getProddys(){
  Proddy.find(function (error, proddy) {
  if (error) { console.error(error); }
  console.log(proddy)
}).sort({_id:-1})
}

module.exports.get = getProddys;
