const { ObjectId, Int32 } = require('mongodb');
const mongoose = require('mongoose');
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

mongoose.model('user', userSchema);