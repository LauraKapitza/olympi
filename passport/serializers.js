const passport = require('passport');
const User     = require('../models/Users-model');

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
  .then(userDocument => {
    cb(null, userDocument);
  })
  .catch(err => {
    cb(err);
  })
});
