//Routes are not tested yet via Postman

const express = require('express');
const mongoose = require('mongoose');
const notifRouter = express.Router();

const Notifications = require('../models/Notifications-model.js');

// GET router - to get all notifications
notifRouter.get('/notifications', (req, res, next) => {
//   if (!req.session.currentUser) {
//     res.status(401).json({message: "You need to be logged in to upload your video"});
//     return;
//   }

//   Notifications.find({$and:[{user_id: req.session.currentUser._id},{replied: false}]})
//     .populate('user_id')
//     .then(notifsFromDB => {
//       res.status(200).json(notifsFromDB);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     })
// });


// //POST router - to update a notification
// notifRouter.get('/', (req, res, next) => {
//   if (!req.session.currentUser) {
//     res.status(401).json({message: "You need to be logged in to upload your video"});
//     return;
//   }

//   if(!mongoose.Types.ObjectId.isValid(req.params.notifId)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   Notifications.findById(req.params.notifId)
//     .populate('user_id')
//     .then(notifsFromDB => {
//       res.status(200).json(notifsFromDB);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     })
});

//GET Routes - to get a specific notification
notifRouter.get('/:notifId', (req, res, next) => {
  
  // if (!req.session.currentUser) {
  //   res.status(401).json({message: "You need to be logged in to upload your video"});
  //   return;
  // }

  // if(!mongoose.Types.ObjectId.isValid(req.params.notifId)) {
  //   res.status(400).json({ message: 'Specified id is not valid' });
  //   return;
  // }
  
  // Notifications.findById(req.params.notifId)
  // .then(notification =>{
  //     res.status(201).json(notification);
  // })
  // .catch( err =>{
  //     res.status(500).json(err);
  // })
});

module.exports = notifRouter;