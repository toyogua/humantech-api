const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Members = mongoose.model('Members',  new Schema({
    name: String,
    lastName: String,
    bio: String,
    position: { type: Schema.Types.ObjectId, ref: 'Positions'},
    avatar: String,
    areas: [
        {
            type: Schema.Types.ObjectId, ref: 'Areas'
        }
    ],
    status: { type: Number, default: 1 }
}, { timestamps: true }));

module.exports = Members;