const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists.'],
        match: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        require: true,
        trim: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    }
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = User
