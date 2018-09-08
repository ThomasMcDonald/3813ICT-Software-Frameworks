var path = require('path');
var Proddy = require(path.resolve( __dirname,'models/proddy.js'));

function addProddy(name, price, type, description){
  var new_proddy = new Proddy({
      name: name,
      price: price,
      type: type,
      description: description
    });

    new_proddy.save(function (error) {
    if (error) {
      console.log(error)
    }
  });
}


module.exports.add = addProddy;
