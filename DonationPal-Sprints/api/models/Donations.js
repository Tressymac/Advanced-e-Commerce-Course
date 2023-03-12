const { ObjectId, Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const donationSchema = new Schema ({
    _id: {
        type: ObjectId,
        required: true
    },
    campaign_id: {
        type: ObjectId,
        required: true
    },
    user_id: {
        type: ObjectId,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    donation_date: {
        type: Date,
        required: true
    }
    }
);

mongoose.model('donation', donationSchema);
