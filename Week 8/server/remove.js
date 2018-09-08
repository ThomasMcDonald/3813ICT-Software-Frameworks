var path = require('path');
var Proddy = require(path.resolve( __dirname,'models/proddy.js'));

function remove(name){
  Proddy.findOne({name: name}, function (err, proddy) {
   console.log('Deleting Product', proddy);
   if (err)  {throw err;}
   console.log(proddy._id)
       Proddy.deleteOne({_id: proddy._id}, function (err) {
         if (err){
             throw err;
         }else {
           console.log('Deleting Proddy');
         }
        });
  });
}


module.exports.remove = remove;
