const mongoose = require('mongoose');

const PersonModel = mongoose.model('Person',
    mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String
        },
        age: {
            type: Number
        }
    }, { timestamps: true })
);

module.exports = PersonModel;