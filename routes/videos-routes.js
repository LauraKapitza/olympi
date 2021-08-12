const express = require('express');
const mongoose = require('mongoose');
const videosRouter = express.Router();
const uploader = require('../configs/cloudinary.config.js');

const Comments = require('../models/Comments-model.js');
const Videos = require('../models/Videos-model.js');
const User = require('../models/Users-model.js');
const { EXERCISES, FORM, OVERHEADPRESS, DEADLIFT, SQUAT, BENCHPRESS } = require('../constants.js')


// POST route => to create a new video
videosRouter.post('/', uploader.single('file'), async (req, res, next) => {
  const { exercise, description, category, weight, weight_metric, reps, rounds } = req.body;

  // Check user is logged in
  if (!req.user) {
    res.status(401).json({ message: "You need to be logged in to upload your video" });
    return;
  };

  // Check a file has been provided
  if (!req.file) {
    res.status(400).json({ message: "No file uploaded!" });
    return;
  };

  if (!EXERCISES.includes(exercise)) { //check if exercise spelling is correct
    res.status(400).json({ message: "Exercise does not exist. Please select one of the exercises provided." })
    return;
  };

  if (!weight_metric === 'kg' && !weight_metric === 'lb') { //check if exercise spelling is correct
    res.status(400).json({ message: "Metric does not exist. Please select one of the metrics provided." })
    return;
  };
  try {
    let newVideo = await Videos.create({
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
    newVideo = await newVideo.populate('creator_id').execPopulate();
    newVideo = await newVideo.populate('comments').execPopulate();

    res.status(201).json(newVideo);
  } catch (e) {
    res.status(500).json(err);
  }

});


// GET route ==> getting videos
videosRouter.get('/', async (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "You need to be logged in to upload your video" });
    return;
  }

  try {
    let videos = await Videos.find({ category: 'trending' }); //find all trending videos

    await Promise.all(videos.map(async video => {
      video = await video.populate('creator_id').execPopulate(); //populate video creator
      video = await video.populate(
        {
          path: 'comments',
          populate: [{
            path: 'to_id',
            model: User
          },
          {
            path: 'author_id',
            model: User
          }]
        }
      ).execPopulate(); //populate comments of the videos
    }));

    videos = videos.sort((a, b) => b.createdAt - a.createdAt) //sort videos by date created
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json(err)
  };
});


//POST /videos/:id/tags
videosRouter.post('/:videoId/tags', (req, res, next) => {
  const { tags, exercise } = req.body;
  const user = req.user;
  let formTagExist = false;

  if (!mongoose.Types.ObjectId.isValid(req.params.videoId)) { //check if video ID exists
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  };

  if (!user) { //check if user is logged-in
    res.status(401).json({ message: "You need to be logged in to upload your video" });
    return;
  };

  if (!tags) {
    res.status(400).json({ message: "No tag selected!" });
    return;
  };

  tags.forEach(tag => {
    if (!FORM.includes(tag)) formTagExist = true;
  });

  if (!EXERCISES.includes(exercise)) { //check if exercise spelling is correct
    res.status(400).json({ message: "Exercise does not exist. Please select one of the exercises provided." })
    return;
  };

  tags.map(tag => { //check if tags of user exist 
    if (!FORM.includes(tag) &&
      !OVERHEADPRESS.includes(tag) &&
      !DEADLIFT.includes(tag) &&
      !SQUAT.includes(tag) &&
      !BENCHPRESS.includes(tag)) { //check if form scoring tag is correct
      res.status(400).json({ message: "One of the tags does not exist. Please select only the tags provided." })
      return;
    };
  });

  Videos.findById(req.params.videoId)
    .then(videoFromDB => { //add userId to each tag which they chose
      tags.forEach(item => {
        if (!videoFromDB.tags[item].includes(user._id)) {
          videoFromDB.tags[item].push(user)
        }
      })
      videoFromDB.save()
        .then(response => {
          res.status(201).json(response)
        })
        .catch(err => {
          res.status(500).json({ message: 'Error while saving the updated video into DB.' });
        })
    })
    .catch(err => {
      res.status(500).json(err);
    })

})

//update votes field on videos 
videosRouter.post('/:videoId/upvote', async (req, res, next) => {
  const { votes } = req.body;
  console.log(req.body)
  console.log("$$$$$", req.params)
  console.log("$$$$$", req.query)
  try {
    let video = await Videos.findById(req.params.videoId)
    video.votes = votes
    video.save()
    res.status(200).json(video)
  }
  catch (err) {
    res.status(500).json({ message: 'Error while saving the updated video into DB.' });
  }
})


///////change here
//  GET /videos/explore
videosRouter.get('/explore', async (req, res, next) => {
  // res.send(req.query)
  // return;
  // if (!req.user) {
  //   res.status(401).json({message: "You need to be logged in to upload your video"});
  //   return;
  // }
  // const {category = 'trending', tags =[]} = req.query;
  try {
    const { category, sortBy } = req.query;
    const allVideos = await Videos.find({ category: category }).sort({ votes: sortBy === 'desc' ? -1 : 1})
  .populate('creator_id')
  .populate('comments')

res.status(200).json(allVideos)
  }
  catch (error) {
  res.status(500).json(error);
}
});

/// help load user videos 
videosRouter.get("/loadUserVideos", async (req, res, next) =>{
  // return;
  try{
    const userVideos = await Videos.find({creator_id: req.query.creator})

    res.status(200).json(userVideos)
  }
  catch(error){
    res.status(500).json(error);
  }
})
// GET /videos/ask
videosRouter.get('/ask', async (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "You need to be logged in to send a request" });
    return;
  }

  try {
    let professionals = await User.find({ professional: true }); //find all professional users

    //NO NEED TO POPULATE THE LIKES OF EACH PROFESSIONAL USER
    // await Promise.all(professionals.map(async professional => {
    //   professional = await professional.populate('likes').execPopulate();; //populate comments of the videos
    // }));
    res.status(200).json(professionals);
  } catch (err) {
    res.status(500).json(err)
  };
});


// POST /videos/:videoId/ask
videosRouter.post('/:videoId/ask', async (req, res, next) => {
  const { question, to_id } = req.body;
  console.log('ask video id', req.params.videoId)

  if (!question || !to_id) {
    res.status(400).json({ message: "Please indicate the professional and a question!" });
    return;
  };

  if (!mongoose.Types.ObjectId.isValid(req.params.videoId)) { //check if video ID exists
    res.status(400).json({ message: 'Specified video id is not valid' });
    return;
  };

  if (!mongoose.Types.ObjectId.isValid(to_id)) { //check if professional ID exists
    res.status(400).json({ message: 'Specified professional id is not valid' });
    return;
  };

  if (!req.user) { //check if user is logged-in
    res.status(401).json({ message: "You need to be logged in to upload your video" });
    return;
  };

  try {
    let newComment = await Comments.create({
      author_id: req.user._id,
      question,
      to_id,
    })

    let video = await Videos.findById(req.params.videoId);
    video.comments.push(newComment);
    video = await video.save();

    newComment = await newComment.populate('author_id').execPopulate();
    newComment = await newComment.populate('to_id').execPopulate();
    res.status(201).json(newComment);

  } catch {
    res.status(500).json(err);
  };

})

// POST /videos/:videoId/reply
videosRouter.post('/:videoId/reply', async (req, res, next) => {
  const { reply, to_id, author_id, question } = req.body;
  console.log('answer video id', req.params.videoId)

  if (!reply || !author_id || !question || !to_id) {
    res.status(400).json({ message: "Please indicate your answer, the question and the person asking!" });
    return;
  };

  if (!mongoose.Types.ObjectId.isValid(req.params.videoId)) { //check if video ID exists
    res.status(400).json({ message: 'Specified video id is not valid' });
    return;
  };

  if (!mongoose.Types.ObjectId.isValid(author_id)) { //check if professional ID exists
    res.status(400).json({ message: 'Specified user id is not valid' });
    return;
  };

  if (!mongoose.Types.ObjectId.isValid(to_id)) { //check if professional ID exists
    res.status(400).json({ message: 'Specified professional id is not valid' });
videosRouter.post('/:commentId/reply', async (req, res, next)=>{
  const reply = req.body.reply;
  const commentId = req.params.commentId
  
  if (!reply) {
    res.status(400).json({message: "Please indicate your answer!"});
    return;
  };

  if(!mongoose.Types.ObjectId.isValid(commentId)) { //check if video ID exists
    res.status(400).json({ message: 'Specified comment id is not valid' });
    return;
  };

  if (!req.user) { //check if user is logged-in
    res.status(401).json({ message: "You need to be logged in to upload your video" });
    return;
  };

  try {
    let comment = await Comments.findOneAndUpdate({ $and: [{ author_id }, { question }, { to_id }] }, { reply })

    comment = await comment.populate('author_id').execPopulate();
    comment = await comment.populate('to_id').execPopulate();
    res.status(201).json(comment);

  } catch {
  
  await Comments.findByIdAndUpdate({_id: commentId}, {reply})
  
  let updatedComment = await Comments.findById({_id: commentId})
  updatedComment = await updatedComment.populate('author_id').execPopulate();
  updatedComment = await updatedComment.populate('to_id').execPopulate();
  res.status(201).json(updatedComment);
  try {

  }catch(err){
    res.status(500).json(err);
  };

})


//DELETE /videos/:id
videosRouter.delete('/:videoId', (req, res, next) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.videoId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  // if (!req.user) {
  //   res.status(401).json({message: "You need to be logged in to upload your video"});
  //   return;
  // }

  Videos.findByIdAndRemove(req.params.videoId)
    .then(() => {
      res.status(204).json({ message: `Video with ${req.params.id} is removed successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

// GET route => to retrieve a specific video
videosRouter.get('/:videoId', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "You need to be logged in to upload your video" });
    return;
  }

  Videos.findById(req.params.videoId)
    .then(video => {
      res.status(200).json(video);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


module.exports = videosRouter;