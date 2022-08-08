const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Areas = mongoose.model('Areas', new Schema({
    name: String,
    description: String,
    icon: String,
    status: { type: Number, default: 1 },
    members: [
        {
            type: Schema.Types.ObjectId, ref: 'Members'
        }
    ]
}, { timestamps: true }));

module.exports = Areas;