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
  city: String,
  country: String,
  fav_exercise: String,
  professional: {
    type: Boolean,
    default: false
  },
  career_date: {
    type: Date,
    required: function() { return this.professional === true; } // Only required if professional is true
  },
  certifications: {
    type: [String],
    required: function() { return this.professional === true; } // Only required if professional is true
  },
  website: String,
  about: {
    type: String,
    required: function() { return this.professional === true; } // Only required if professional is true
  },
  admin: {
    type: Boolean,
    default: false
  },
  image: String
}, 
{
  timestamps: true
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;