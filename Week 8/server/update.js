var path = require('path');
var Proddy = require(path.resolve( __dirname,'models/proddy.js'));

function update(current, future){
  Proddy.findOne({name: current}, function (error, proddy) {
  if (error) { console.error(error); }
  console.log(proddy._id)
  Proddy.updateOne({_id: proddy._id},{ $set: { name: future } }, function(err, proddy) {
    if (err) {
      console.log(err)
    } else {
      console.log("Updated Proddy");
    }
  });
})

}

module.exports.update = update;
