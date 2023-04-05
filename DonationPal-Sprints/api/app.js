require('app-module-path').addPath(__dirname);
require('dotenv').config();
const mongoose = require('mongoose');


const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const rateLimit = require('express-rate-limit');

// Routers
const apiRouter = require('./routes/api/v1');
const ordersRouter = require('./routes/api/v1/orders');
const passport = require('passport');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then( () => {console.log("MongoDB connected") })
.catch( (err) => {console.log(err)});

const app = express();

// Passport initialization 
// Makes passport available throughout the app 
require('config/passport');

// Configure the rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(limiter);
app.use(cors());

// if (process.env.NODE_ENV == 'production'){
//   app.use(cors());
// }else {
//   app.use(cors());
// }

app.use('/api/v1', apiRouter);
app.use('/api/v1/orders', passport.authenticate('jwt', {session: false}), ordersRouter);


console.log(process.env.NODE_ENV)

module.exports = app;