// const { ObjectId, Int32 } = require('mongodb');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //Create Schema 
// const donationSchema = new Schema ({
//     _id: {
//         type: ObjectId,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     goal: {
//         type: Int32,
//         required: true
//     },
//     start_date: {
//         type: Date,
//         required: true
//     },
//     end_date: {
//         type: Date,
//         required: true
//     }
//     }
// );

// mongoose.model('donation', donationSchema);