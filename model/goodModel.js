var mongoose = require('mongoose')

module.exports = mongoose.model('goods', new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  price: Number,
  cate: String,
  hot: Boolean,
  
  rank: Number,
  create_time: Number,
  status: Number
}))
