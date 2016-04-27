var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var ModelImageSchema = new mongoose.Schema({
  name:  String,
  src: String
})

module.exports = mongoose.model('ModelImage', ModelImageSchema);