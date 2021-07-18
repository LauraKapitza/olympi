const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'Username is required.'],
    unique: true
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required.'],
    unique: true
  },
  password: {
      type: String,
      required: [true, 'Password is required']
  },
  likes: [{
    type: Schema.ObjectId, 
    ref: 'Videos'
  }],
  

}, 
{
  timestamps: true
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;