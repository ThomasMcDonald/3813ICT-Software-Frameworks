var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
});

var Proddy = mongoose.model("Proddys", productSchema);
module.exports = Proddy;
