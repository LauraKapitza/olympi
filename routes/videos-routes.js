const express = require('express');
const mongoose = require('mongoose');
const videosRouter = express.Router();
const uploader = require('../configs/cloudinary.config.js');

const User = require('../models/Users-model.js');
const Videos = require('../models/Videos-model.js');


// POST route => to create a new video

videosRouter.post("/videos", uploader.single("video"), (req, res, next) => {
  // Check user is logged in
  if (!req.session.currentUser) {
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  }

  // Check a file has been provided
  if (!req.file) {
    res.status(400).json({message: "No file uploaded!"});
    return;
  }

    Videos.create({
      creator_id: req.session.currentUser._id,
      videoUrl: req.file.path,
      exercise: req.body.exercise,
      description: req.body.description,
      category: req.body.category,
      weight: req.body.weight,
      weight_metric: req.body.weight_metric,
      reps:req.body.reps,
      rounds: req.body.rounds
    })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      }) 
});


// GET route ==> getting videos

videosRouter.get('/videos', (req, res, next) => {
  if (!req.session.currentUser) {
    res.status(401).json({message: "You need to be logged in to upload your video"});
    return;
  }

  Videos.find()
    .populate('creator_id')
    .populate('comments')
    .then(videosFromDB => {
      res.status(200).json(videosFromDB);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});



//DELETE /videos/:id



//POST /videos/:id/tags


//  GET /videos/explore



//  GET /videos/:id/ask


// POST /videos/:id/ask


module.exports = videosRouter;