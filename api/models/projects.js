const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Projects = mongoose.model('Projects', new Schema({
    title: String,
    subtitle: String,
    header: String,
    description: String,
    top_image: String,
    bottom_image: String,
    url: String,
    image: String,
    status: {type: Number, default: 1 },
    categories: [
        {
            type: Schema.Types.ObjectId, ref: 'Categories'
        }
    ],
    skills: [
        {
            type: Schema.Types.ObjectId, ref: 'Skills'
        }
    ],
}, { timestamps: true }));

module.exports = Projects;