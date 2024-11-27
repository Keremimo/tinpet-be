const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    personalityType: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String, //Add URL or img path
        required: true,
        trim: true
    }
});

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet;
