const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/Users-model.js');

// Bcrypt to encrypt passwords
const bcrypt = require('bcryptjs');
const bcryptSalt = 10;

////////////////////////////////////////////////////////////////////////
///////////////////////////// LOGIN ////////////////////////////////////
////////////////////////////////////////////////////////////////////////

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({message: 'Something went wrong authenticating user'});
      return;
    }
  
    if (!theUser) {
      res.status(401).json(failureDetails); // `failureDetails` contains the error messages from our logic in "LocalStrategy" {message: '…'}.
      return;
    }

    // save user in session
    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({message: 'Session save went bad.'});
        return;
      }

      // We are now logged in (thats why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

////////////////////////////////////////////////////////////////////////
///////////////////////////// SIGNUP //////////////////////////////////
////////////////////////////////////////////////////////////////////////

router.post('/signup', (req, res, next) => {
  const {professional, username, password, email, city, fav_exercise, certifications, website, about} = req.body;
  let career_date;
  if (professional && !req.body.career_date) {
    res.status(400).json({message: "Please indicate the date when you start your career"});
    return;
  }
  
  if (professional && req.body.career_date){
    career_date = new Date(req.body.career_date.toString())
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

////////////////////////////////////////////////////////////////////////
///////////////////////////// LOGOUT ///////////////////////////////////
////////////////////////////////////////////////////////////////////////

router.get('/logout', (req, res) => {
  req.logout();
  res.status(204).send();
});

////////////////////////////////////////////////////////////////////////
///////////////////////////// loggedin /////////////////////////////////
////////////////////////////////////////////////////////////////////////

router.get("/loggedin", (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({message: 'Unauthorized'});
});

////////////////////////////////////////////////////////////////////////
///////////////////////////// USERPROFILE //////////////////////////////
////////////////////////////////////////////////////////////////////////

router.get('/user', (req, res, next)=> {
  // need to be changed
  // if (!req.session.currentUser) {
  //   res.status(401).json({message: "You need to be logged in to edit your profile"});
  //   return;
  // }
  User.findById(req.query.id)
  .then(userFromDB => {
    res.status(201).json(userFromDB)
  })
  .catch(err => {
    res.status(500).json({message: "Something went wrong when enterin the user's profile"});
  })
})
router.put('/updateUser', (req, res, next)=> {
  // res.send(req.body)
  // return;
  // need to be changed
  // if (!req.session.currentUser) {
  //   res.status(401).json({message: "You need to be logged in to edit your profile"});
  //   return;
  // }
  User.findByIdAndUpdate(
    req.query.id,
    {
      username: req.body.username,
      email: req.body.email,
      city: req.body.city,
      fav_exercise: req.body.fav_exercise,
      about: req.body.about
    },
    { new: true })
    .then(userFromDB => {
      res.status(201).json(userFromDB)
    })
    .catch(error => {
      res.status(500).json({message: 'Error while saving user into DB.'})
    });;
})

router.post('/user', (req, res, next) => {
  // Check user is logged in
  if (!req.session.currentUser) {
    res.status(401).json({message: "You need to be logged in to edit your profile"});
    return;
  };

  const password = req.body.password;

  bcrypt
    .genSalt(bcryptSalt)
    .then(salt => bcrypt.hash(password, salt))
    .then(hashedPassword => {
      return User.findByIdAndUpdate(
        req.session.currentUser._id,
        {
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email,
          city: req.body.city,
          fav_exercise: req.body.fav_exercise,
          career_date: req.body.career_date,
          certifications: req.body.certifications,
          website: req.body.website,
          about: req.body.about
        },
        { new: true });
    })
    .then(userFromDB => {
      res.status(201).json(userFromDB)
    })
    .catch(error => {
      res.status(500).json({message: 'Error while saving user into DB.'})
    });

});

module.exports = router;