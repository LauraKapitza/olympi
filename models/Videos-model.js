//TODO add real tag names under "tag"

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const videoSchema = new Schema({
  creator_id: {type: Schema.Types.ObjectId, ref: 'Users' },
  videoUrl: {
    type: String,
    required: true
  },
  exercise: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  weight_metric: {
    type: String,
    enum: {
      values: ['kg', 'lb'],
      message: '{VALUE} is not supported'
    },
    default: 'kg',
  },
  reps: {
    type: Number,
    required: [true, 'Must be at least one rep']
  },
  rounds: {
    type: Number,
    required: [true, 'Must be at least one round']
  },
  category: {
    type: String,
    enum: {
      values: ['trending', 'fail', 'learn'],
      message:'{VALUE} is not supported'
    },
    default: 'trending'
  },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],
  tags: {
    //properties need to be changes by the real tag names, see also constants.js
    One: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    Two: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    Three: [{type: Schema.Types.ObjectId, ref: 'Users' }]
  }
},
{
  timestamps: true
});

const Videos = mongoose.model('Videos', videoSchema);
module.exports = Videos;