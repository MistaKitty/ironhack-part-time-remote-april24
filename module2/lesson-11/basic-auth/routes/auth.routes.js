const express = require('express');
const bcryptjs = require('bcryptjs');

const router = express.Router();
const User = require('../models/User.model');
const saltRounds = 10;

/* GET signup page */
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post('/signup', (req, res, next) => {
    // console.log("The form data: ", req.body);
   
    const { username, email, password } = req.body;
   
    bcryptjs
      .genSalt(saltRounds)
      .then(salt => bcryptjs.hash(password, salt))
      .then(hashedPassword => {
        return User.create({
          // username: username
          username,
          email,
          // passwordHash => this is the key from the User model
          //     ^
          //     |            |--> this is placeholder (how we named returning value from the previous method (.hash()))
          passwordHash: hashedPassword
        });
      })
      .then(userFromDB => {
        // console.log('Newly created user is: ', userFromDB);
        res.redirect(`/userProfile/${userFromDB.username}`);
      })
      .catch(error => next(error));
  });

router.get('/userProfile/:username', (req, res) => {
    User.findOne({username: req.params.username})
        .then(foundUser => {
            res.render('auth/profile', {user: foundUser})
        })
        .catch(err => console.log(err))
});

module.exports = router;
