const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Categories = mongoose.model('Categories', new Schema({
    name: String,
    description: String,
    status: { type: Number, default: 1 }
}, { timestamps: true }));

module.exports = Categories;