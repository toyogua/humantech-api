const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoreServices = mongoose.model('MoreServices', new Schema({
    title: String,
    subtitle: String,
    description: String,
    image: String,
    icon: String,
    details:
        {
            footer_text: String,
            sections: [
                {
                    title: String,
                    subtitle: String,
                    options: [],
                }
            ]
        },
    platforms: [
        {type: Schema.Types.ObjectId, ref: 'Platforms'}
    ],
    technologies: [
        {type: Schema.Types.ObjectId, ref: 'Technologies'}
    ],
    status: {type: Number, default: 1},
}, {timestamps: true}));

module.exports = MoreServices;