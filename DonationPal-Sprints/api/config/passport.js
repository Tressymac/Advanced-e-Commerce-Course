// Requires
const passport = require('passport');
const UserModel = require('../models/Users');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


// Helper Functions
// Define a function that accepts an email and passowrd and creates a user in the database
let createUser = async(email, password, cb) => {
    try {
        const user = await UserModel.create({email, password});
        return cb(null, user);
    }catch (err){
        cb(err);
    }
};

// Define a function that will process an email and password againist the database
let aunthenticateLogin = async(email, password, cb) => {
    // Search mongo for the user with the supplied email
    UserModel.findOne({email})
    .then(async (user) => {
        if (!user){
            return cb (null, false);
        }
        
        const isValidPwd = await user.isValidPassword(password);

        if (isValidPwd){
            return cb(null, user);
        } else{
            return cb(null, false);
        }
    })
    .catch((err) => {
        // This is an actual application error; something has gone wrong
        cb(err);
    });
};

// Define a function that extracts auser id from agiven token
let getUserFromToken = async(token, cb) => {
    try{
        return cb(null, token.payload);
    }catch(err) {
        cb(err);
    }
}


// Passport Middleware

// 1- Local strategy for registering a user 
passport.use(
    // Nickmane 
    'register',
    // Stratgey implementation
    new localStrategy(
        // Passport expects fields named "username" and "password"
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        // Pass a function that can find how the user is written to the db 
        createUser
    )
);

// 2- Local Strategy for logging in a user
passport.use(
    // Nickmane 
    'login',
    // Stratgey implementation
    new localStrategy(
        // Passport expects fields named "username" and "password"
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        // Pass a function that can find how the user is written to the db 
        aunthenticateLogin
    )
);

// 3- JWT stratgy for reading a token and providing access to a resource 
passport.use(
    new JWTstrategy(
        // Passport retrives the token from the request header and uses the secret key in the .env file to determine which user sent the request
        // It then calls a function that extracts a user and returns it (getUserToken)
        {
            secretOrKey: process.env.TOP_SECRET_KEY,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        // Use our helper function that returns the user object based on token 
        getUserFromToken
    )
);
