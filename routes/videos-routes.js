const express = require('express');
const mongoose = require('mongoose');
const videosRouter = express.Router();
const uploader = require('../configs/cloudinary.config.js');

const Comments = require('../models/Comments-model.js');
const Videos = require('../models/Videos-model.js');
const {EXERCISES, FORM, OVERHEADPRESS, DEADLIFT, SQUAT, BENCHPRESS} = require('../constants.js')


// POST route => to create a new video
videosRouter.post('/', uploader.single('file'), (req, res, next) => {
  const {exercise, description, category, weight, weight_metric, reps, rounds} = req.body;
  
  // Check user is logged in
  if (!req.user) {
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  };

  // Check a file has been provided
  if (!req.file) {
    res.status(400).json({message: "No file uploaded!"});
    return;
  };
  
  if(!EXERCISES.includes(exercise)) { //check if exercise spelling is correct
    res.status(400).json({message: "Exercise does not exist. Please select one of the exercises provided."})
    return;
  };

  if(!weight_metric==='kg' && !weight_metric==='lb') { //check if exercise spelling is correct
    res.status(400).json({message: "Metric does not exist. Please select one of the metrics provided."})
    return;
  };
  
  console.log(req.file)

  Videos.create({
    creator_id: req.user._id,
    videoUrl: req.file.path,
    exercise,
    description,
    category,
    weight,
    weight_metric,
    reps,
    rounds
  })
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    }) 

});


// GET route ==> getting videos
videosRouter.get('/', (req, res, next) => {
  console.log("okkk")
  if (!req.user) {
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  }


  Videos.find({category: 'trending'})
    .populate('creator_id')
    .populate('comments')
    .then(videosFromDB => {
      res.status(200).json(videosFromDB);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


//POST /videos/:id/tags
videosRouter.post('/:videoId/tags', (req, res, next)=>{
  const {tags, exercise} = req.body;
  const user = req.user;
  let formTagExist = false;
  
  if(!mongoose.Types.ObjectId.isValid(req.params.videoId)) { //check if video ID exists
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  };

  if (!user) { //check if user is logged-in
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  };

  if (!tags) {
    res.status(400).json({message: "No tag selected!"});
    return;
  };

  tags.forEach(tag => {
    if (!FORM.includes(tag)) formTagExist = true;
  });

  if(!EXERCISES.includes(exercise)) { //check if exercise spelling is correct
    res.status(400).json({message: "Exercise does not exist. Please select one of the exercises provided."})
    return;
  };
  
  tags.map(tag => { //check if tags of user exist 
    if(!FORM.includes(tag) && 
      !OVERHEADPRESS.includes(tag) && 
      !DEADLIFT.includes(tag) && 
      !SQUAT.includes(tag) &&
      !BENCHPRESS.includes(tag)) { //check if form scoring tag is correct
      res.status(400).json({message: "One of the tags does not exist. Please select only the tags provided."})
      return;
    };
  });

  Videos.findById(req.params.videoId)
    .then(videoFromDB => { //add userId to each tag which they chose
      tags.forEach(item => {
        if(!videoFromDB.tags[item].includes(user._id)){
          videoFromDB.tags[item].push(user)
        }
      })
      videoFromDB.save()
        .then(response => {
          res.status(201).json(response)
        })
        .catch(err => {
          res.status(500).json({message: 'Error while saving the updated video into DB.'});
        })
    })
    .catch(err => {
      res.status(500).json(err);
    })

})

//  GET /videos/explore
videosRouter.get('/explore', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  }

  Videos.find()
    .populate('creator_id')
    .populate('comments')
    .then(videosFromDB => {
      
      const videosByCategory = {
        trending: [],
        fail: [],
        learn: []
      }

      videosFromDB.forEach(video => videosByCategory[video.category].push(video))
      res.status(200).json(videosByCategory);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


// POST /videos/:id/ask
videosRouter.post('/:videoId/ask', (req, res, next)=>{
  const {question, to_id} = req.body;

  if (!question || !to_id) {
    res.status(400).json({message: "Please indicate the professional and a question!"});
    return;
  };

  if(!mongoose.Types.ObjectId.isValid(req.params.videoId)) { //check if video ID exists
    res.status(400).json({ message: 'Specified video id is not valid' });
    return;
  };

  if(!mongoose.Types.ObjectId.isValid(to_id)) { //check if professional ID exists
    res.status(400).json({ message: 'Specified professional id is not valid' });
    return;
  };

  if (!req.user) { //check if user is logged-in
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  };

  let newComment;
  Comments.create({
    author_id: req.user._id,
    question,
    to_id
  })
  .then(comment => {
    newComment = comment;
    return Videos.findById(req.params.videoId) 
  })
  .then(video => {
    video.comments.push(newComment)
    return video.save()
  .then(response => {
    Videos.findById(req.params.videoId)
    .populate('comments')
    .populate('creator_id')
    .then(video => {
      console.log(video)
      res.status(201).json(video);
    })
    .catch(err => {
      res.status(500).json({message: 'Something went wrong when searching the video'})
    })
  })
  })
  .catch(err => {
    res.status(500).json(err);
  }) 
})


//DELETE /videos/:id
videosRouter.delete('/:videoId', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.videoId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  if (!req.user) {
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  }

  Videos.findByIdAndRemove(req.params.videoId)
    .then(() => {
      res.status(204).json({ message: `Video with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})

// GET route => to retrieve a specific video
videosRouter.get('/:videoId', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  }
  
  Videos.findById(req.params.videoId)
  .then(video =>{
      res.status(200).json(video);
  })
  .catch( err =>{
      res.status(500).json(err);
  })
});


module.exports = videosRouter;