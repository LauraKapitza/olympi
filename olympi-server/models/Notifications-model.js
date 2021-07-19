const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const notificationSchema = new Schema({
  user_id: {type: Schema.ObjectId, ref: 'Users' },
  creation_date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  replied: {
    type: Boolean,
    default: false
  }
}, 
{
  timestamps: true
});

const Notifications = mongoose.model('Notifications', notificationSchema);
module.exports = Notifications;