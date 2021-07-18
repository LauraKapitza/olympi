const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const notificationSchema = new Schema({
  user_id: {type: Schema.ObjectId, ref: 'Users' },
  password: String
}, 
{
  timestamps: true
});

const Notifications = mongoose.model('Notifications', notificationSchema);
module.exports = Notifications;