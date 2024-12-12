const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
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
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
        trim: true
    },
    neutered: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        enum: {
            values: ["Small", "Medium", "Large"],
            message: "Can only be Small, Medium, Large. Case sensitive (Did you input 'small'?)"
        },
        required: true
    },
    species: {
        type: String,
        enum: {
            values: [ //INFO: Mind the enums, the data you send can only be these values or you get error.
                "Dog",
                "Cat",
                "Bird",
                "Fish"
            ],
            message: "Can only be Dog, Cat, Bird or Fish."
        },
        required: true,
        trim: true
    },
    breed: {
        type: String,
        required: true,
        trim: true
    },
    stats: {
        house: {
            type: String,
            enum: {
                values: [
                    "Apartment",
                    "Small",
                    "Medium",
                    "Large"
                ],
                message: "Can only be Apartment, Small, Medium or Large."
            }
        },
        noise: Boolean,
        energetic: Boolean,
        garden: Boolean,
        independent: Boolean,
        children: Boolean,
        trained: Boolean,

    },
    picture: {
        type: String, //Add URL or img path
        default: '',
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false
    }

});

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet;
