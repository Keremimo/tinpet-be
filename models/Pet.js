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
        children: Boolean,
        trained: Boolean,

    },
    picture: {
        type: String, //Add URL or img path
        required: true,
        trim: true
    }
});

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet;
