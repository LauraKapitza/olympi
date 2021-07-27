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
    perfect: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    very_good: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    good: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    fair: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    well: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    improve_it: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    poor_bracing: [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    benched: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    no_lockout: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    arms_forward: [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    head_back: [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    legs_bent: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    other: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    arms_too_wide: [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    arms_too_narrow: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    loose_lats: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    bar_far_from_leg: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    foot_off_floor: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    hips_shoot_up: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    curved_back: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    neck_angle: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    not_parallel: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    butt_wink: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    control_descent: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    knee_path: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    bar_placement_wrong: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    butt_off_bench: [{type: Schema.Types.ObjectId, ref: 'Users' }], 
    no_arch: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    no_leg_drive: [{type: Schema.Types.ObjectId, ref: 'Users' }],
    no_chest_touch: [{type: Schema.Types.ObjectId, ref: 'Users' }]
  }
},
{
  timestamps: true
});

const Videos = mongoose.model('Videos', videoSchema);
module.exports = Videos;