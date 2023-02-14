
var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
require('models/Campaigns');
// require('models/Donations');
require('models/Users');

const Campaigns = mongoose.model('campaign');
// const Donations = mongoose.model('donation');
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

// Getting all users in database
router.get('/campaign/:_id', async function (req, res, next) {
  const regexExpression = req.params._id;
  // const regexFilter = {"_id": {$regex : regexExpression}};
  // const foundCampaign = await Campaigns.find(regexFilter);
  const requestedCampaign = await Campaigns.findById(regexExpression);
  // res.json(foundCampaign);
  console.log(regexExpression);
  console.log(requestedCampaign);
  res.json(requestedCampaign);
});



module.exports = router;