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
  votes: {
    type: Number,
    default: 0,
    required: false
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
    'Perfect': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Very good': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Good': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Fair': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Well': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Let’s improve it!': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Poor bracing': [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    'Benched': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'No lockout': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Arms forward': [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    'Head back': [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    'Legs bent': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Other': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Arms too wide': [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    'Arms too narrow': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Loose lats': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Bar far from leg': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Foot off floor': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Hips shoot up': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Curved back': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Neck angle': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Not parallel': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Butt wink': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Control descent': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Knee path': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Bar placement wrong': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'Butt off bench': [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    'No arch': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'No leg drive': [{type: Schema.Types.ObjectId, ref: 'Users' }],
    'No chest touch': [{type: Schema.Types.ObjectId, ref: 'Users' }]
  }
},
{
  timestamps: true
});

const Videos = mongoose.model('Videos', videoSchema);
module.exports = Videos;