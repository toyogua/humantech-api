const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OurServices = mongoose.model('OurServices', new Schema({
    name: String,
    description: String,
    icon: String,
    status: {type: Number, default: 1},
}, { timestamps: true }));

module.exports = OurServices;