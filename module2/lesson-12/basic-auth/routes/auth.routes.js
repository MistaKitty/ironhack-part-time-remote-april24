const express = require('express');
const bcryptjs = require('bcryptjs');

const router = express.Router();
const User = require('../models/User.model');
const saltRounds = 10;

const { isLoggedIn, isLoggedOut } = require('../middlewares/route-guard.js');

/* GET signup page */
router.get("/signup", isLoggedOut, (req, res, next) => {
  console.log('req.session', req.session)
  res.render("auth/signup");
});

router.post('/signup', isLoggedOut, (req, res, next) => {
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
        res.redirect(`/userProfile`);
      })
      .catch(error => next(error));
  });

router.get('/userProfile', isLoggedIn, (req, res) => {
console.log('req.session', req.session)
res.render('auth/profile', {user: req.session.currentUser})
      
});

router.get('/login', isLoggedOut, (req, res)=>{
  res.render('auth/login')
})

router.post('/login', isLoggedOut, (req, res)=>{
  const { email, password } = req.body;
 
  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }

  User.findOne({ email })
  .then(user => {
    console.log('user', user)
    if (!user) {
     
      console.log("Email not registered. ");
      res.render('auth/login', { errorMessage: 'User not found and/or incorrect password.' });
      return;
    } 
    else if (bcryptjs.compareSync(password, user.passwordHash)) {
      req.session.currentUser = user;
      res.render('auth/profile', { user });
    }
    else {
      console.log("Incorrect password. ");
      res.render('auth/login', { errorMessage: 'User not found and/or incorrect password.' });
    }
  })
  .catch(error => next(error));
})

router.post('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err);
    res.redirect('/');
  });
});

module.exports = router;
