const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Emails = mongoose.model('Emails', new Schema({
    user: String,
    password: String,
    salt: String,
    is_default: Boolean,
    status: {type: Number, default: 1}
}, { timestamps: true }));

module.exports = Emails;