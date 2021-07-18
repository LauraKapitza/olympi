const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const videoSchema = new Schema({
  username: String,
  password: String
}, 
{
  timestamps: true
});

const Videos = mongoose.model('Videos', videoSchema);
module.exports = Videos;