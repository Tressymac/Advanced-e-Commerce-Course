
var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;

const mongoose = require('mongoose');
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



module.exports = router;