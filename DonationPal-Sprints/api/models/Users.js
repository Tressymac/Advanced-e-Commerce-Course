const { ObjectId, Int32 } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

//Create Schema 
const userSchema = new Schema ({
    _id: {
        type: ObjectId,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    name: {
        type: Object,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    dob: {
        type: Object,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    cell: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    nat: {
        type: String,
        required: true
    }
}
);

// Create a "pre-hook" that will run prior to a record being saved 
// Has the incoming passowrd 10x and then store the hashed password back to the user object 
userSchema.pre('save', async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

// Create a helper function that uses bcrypt to check the plain text verison of the password againist the hashed version 
userSchema.methods.isValidPassword = async function(encryptedPassword) {
    const user = this;
    const compare = await bcrypt.compare(encryptedPassword, user.password);
    return compare;
};

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;