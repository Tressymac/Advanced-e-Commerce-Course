
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
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const Campaigns = mongoose.model('campaign');
const Donations = mongoose.model('donation');
const Users = mongoose.model('user');

// Root route
router.get('/', (req, res) => {
    res.send('Root API route');
});

// Helper function to get prod/dev client/api URL
const getURL = (app) => {
  if (process.env.NODE_ENV === 'production'){
      if (app === 'client') {
          return process.env.PROD_CLIENT_URL;
      } else {
          return process.env.PROD_API_URL;
      }
  } else {
      if (app === 'client') {
          return process.env.DEV_CLIENT_URL;
      } else {
          return process.env.DEV_API_URL;
      }
  }
};

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

// Getting donations by user id in database
router.get('/donation/user/:user_id', async function (req, res, next) {
  const paramInputID = {'user_id': new ObjectId(req.params.user_id)}
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

router.post('/donations/create_checkout', async (req, res) => {
  console.log(req.body);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: req.body.campaign_name
          },
          unit_amount: req.body.donation_amount
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `${getURL('api')}/donations/donation_success?success=true&session_id={CHECKOUT_SESSION_ID}&campaign_id=${req.body.campaign_id}`,
    cancel_url: `${getURL('client')}`,
    metadata: {
      campaign_id: req.body.campaign_id
    }
  });

  console.log(session);
  res.redirect(303, session.url);

});

router.get('/donation_success', async (req, res) => {
  // View the entire querystring
  console.log(req.query);
  // Retrieve the checkout session from the Stripe API
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  // View the entire session object returned by Stripe
  console.log(session);
  // Retrieve the campaign_id (metadata or querystring)
  console.log(session.metadata.campaign_id);
  console.log(req.query.campaign_id);

  // TODO: Add a donation record to the database
  const donation_amount = session.amount_total/100;

  // Construct a URL to the front end to deliver the user
  const clientURL = `${getURL('client')}/donation_success?campaign_id=${session.metadata.campaign_id}&donation_amount=${donation_amount}`;

  // Redirect the user
  res.redirect(303, clientURL);
});


module.exports = router;