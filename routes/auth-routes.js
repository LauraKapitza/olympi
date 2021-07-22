const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/Users-model.js");

// Bcrypt to encrypt passwords
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

router.post("/login", (req, res, next) => {
  const {email, password} = req.body;

  if (!email || !password) {
    res.status(400).json({message: "Please type email and password"});
    return;
  }

  User.findOne({email})
  .then(theUser => {
    if (theUser === null) {
      res.status(400).json({ message: "No account for this email." });
      return;
    }
    console.log('the user', theUser)

    //compareSync
    if (bcrypt.compareSync(password, theUser.password) !== true) {
        res.status(400).json({message: 'Wrong credentials'})
        return;
    } 
    
    req.session.currentUser = theUser;
    res.status(200).json(theUser);
    
  })
  .catch(err => {
    res.status(500).json({message: "Something went wrong authenticating user"});
  })
});

router.post("/signup", (req, res, next) => {
  const {professional, username, password, email, city, fav_exercise, certifications, website, about} = req.body;
  let career_date;
  if (professional && !req.body.career_date) {
    res.status(400).json({message: "Please indicate the date when you start your career"});
    return;
  }
  
  if (professional && req.body.career_date){
    career_date = new Date(req.body.career_date)
  }

  if (!email || !username || !password) {
    res.status(400).json({message: "Please indicate username, email and password"});
    return;
  }

  if(professional && !certifications) {
    res.status(400).json({message: "Please name at least one certification."});
    return;
  }

  if(professional && !about) {
    res.status(400).json({message: "Please introduce yourself in few sentences."});
    return;
  }

  User.findOne({$or:[{username},{email}]}, (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username or email already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      professional,
      username,
      password: hashPass,
      email,
      city,
      fav_exercise,
      career_date,
      certifications,
      website,
      about
    });

    newUser.save()
    .then(() => {
      req.login(newUser, (err) => {
        if (err) {
          res.status(500).json({message: 'Login after signup went bad.'});
          return;
        }
    
        res.status(201).json(newUser);
      });
    })
    .catch(err => {
      res.status(500).json({message: "Something went wrong"});
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(204).send();
});


router.post("/edit", (req, res, next) => {
  // Check user is logged in
  if (!req.user) {
    res.status(401).json({message: "You need to be logged in to edit your profile"});
    return;
  }

  // Updating `req.user` with each `req.body` field (excluding some internal fields `cannotUpdateFields`)
  const cannotUpdateFields = ['_id', 'password'];
  Object.keys(req.body).filter(key => cannotUpdateFields.indexOf(key) === -1).forEach(key => {
    req.user[key] = req.body[key];
  });

  // Validating user with its new values (see: https://mongoosejs.com/docs/validation.html#async-custom-validators)
  req.user.validate(function (error) {
    if (error) {
      // see: https://mongoosejs.com/docs/validation.html#validation-errors
      res.status(400).json({message: error.errors});
      return;
    }

    // Validation ok, let save it
    req.user.save(function (err) {
      if (err) {
        res.status(500).json({message: 'Error while saving user into DB.'});
        return;
      }

      res.status(200).json(req.user);
    })
  });
});

// const uploader = require('../cloudinary.js');
// router.post("/upload", uploader.single("photo"), (req, res, next) => {
//   // Check user is logged in
//   if (!req.user) {
//     res.status(401).json({message: "You need to be logged in to upload your avatar"});
//     return;
//   }

//   // Check a file has been provided
//   if (!req.file) {
//     res.status(400).json({message: "No file uploaded!"});
//     return;
//   }

//   // Updating user's `image`
//   req.user.image = req.file.secure_url;

//   // Validating user before saving
//   req.user.validate(function (error) {
//     if (error) {
//       res.status(400).json({message: error.errors});
//       return;
//     }

//     // Validation ok, let save it
//     req.user.save(function (err) {
//       if (err) {
//         res.status(500).json({message: 'Error while saving user into DB.'});
//         return;
//       }

//       res.status(200).json(req.user);
//     })
//   });
  
// });

module.exports = router;