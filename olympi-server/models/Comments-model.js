const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  author_id: {type: Schema.Types.ObjectId, ref: 'Users' },
  question: {
    type: String,
    required: true
  },
  to_id: {type: Schema.Types.ObjectId, ref: 'Users' },
  reply: String
}, 
{
  timestamps: true
});

const Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;