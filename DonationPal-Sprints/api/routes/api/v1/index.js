
var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { session } = require('passport');
require('models/Campaigns');
require('models/Donations');
require('models/Users');


const Campaigns = mongoose.model('campaign');
const Donations = mongoose.model('donation');
const Users = mongoose.model('user');

// Root route
router.get('/', (req, res) => {
    res.send('Root API route');
});

// Getting all campaigns in database
router.get('/campaign', async (req, res) => {
    setTimeout(async function() {
        const filter = {};
        const campaign = await Campaigns.find(filter);
        console.log(campaign);
        res.json(campaign);
    }, 3000);
});

// Getting all users in database
router.get('/user', async (req, res) => {
  setTimeout(async function() {
      const filter = {};
      const user = await Users.find(filter);
      console.log(user);
      res.json(user);
  }, 3000);
});

// Getting campaign by id in database
router.get('/campaign/:_id', async function (req, res, next) {
  const paramInputID = req.params._id;
  const requestedCampaign = await Campaigns.findById(paramInputID);
  console.log(paramInputID);
  console.log(requestedCampaign);
  res.json(requestedCampaign);
});

// Getting users by id in database
router.get('/user/:_id', async function (req, res, next) {
  const paramInputID = req.params._id;
  const requestedCampaign = await Users.findById(paramInputID);
  console.log(paramInputID);
  console.log(requestedCampaign);
  res.json(requestedCampaign);
});

// Getting all donations in database
router.get('/donation', async (req, res) => {
  setTimeout(async function() {
      const filter = {};
      const donation = await Donations.find(filter);
      console.log(donation);
      res.json(donation);
  }, 3000);
});

// Getting donations by id in database
router.get('/donation/:_id', async function (req, res, next) {
  const paramInputID = req.params._id;
  const requestedCampaign = await Donations.findById(paramInputID);
  console.log(paramInputID);
  console.log(requestedCampaign);
  res.json(requestedCampaign);
});

// Getting donations by Campaign id in database
router.get('/donation/campaign/:campaign_id', async function (req, res, next) {
  const paramInputID = {'campaign_id': new ObjectId(req.params.campaign_id)}
  // req.params.campaign_id;
  const requestedCampaign = await Donations.find(paramInputID);
  console.log(paramInputID);
  console.log(requestedCampaign);
  res.json(requestedCampaign);
});


router.post('/users/register', passport.authenticate('register', {session: false}), async (req, res) => {
  res.status(200).json({
    message: 'Registration successful',
    user: req.user
  })
});

router.post('/users/login', 
  // Passport middleware 
  passport.authenticate('login', {session: false, failWithError: true}),
  // If we find user, we will land here
  function (req, res) {
    console.log(req.user);
    // Create a token to be returned in the response 
    // Create a payload (the middle part of the token)
    const payload = { id: req.user._id, email: req.user.email } // Do not put a password in here
    // Create a token 
    const token = jwt.sign( { payload}, process.env.TOP_SECRET_KEY, { expiresIn: '1d'});
    // Create n object that includes user infomation for the client and the token 
    loginObject = {};
    loginObject._id = req.user._id;
    loginObject.email = req.user.email;
    loginObject.accessToken = token;
    console.log(loginObject);
    return res.status(200).json(loginObject);
  },
  // If we do not find a user, we will land here
  function(err, req, res) {
    errorResponse = {
      "error": {
        "name": "loginError"
      },
      "message": "usernot found",
      "statusCode": 401, 
      "data": [],
      "success": false
    }
    return res.status(401).json(errorResponse);
  }
);

router.get('/users/me', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.status(200).json(req.user);
});


module.exports = router;