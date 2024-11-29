const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    email: { //TODO: Add constraints for min-max characters
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
    },
    lastLogin: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'username',
    errorMessages: {
        UserExistsError: 'A user with this username already exists.',
        IncorrectPasswordError: 'Incorrect username or password',
        IncorrectUsernameError: 'Incorrect username or password'
    }
})

userSchema.methods.updateLastLogin = () => {
    this.lastLogin = new Date()
    return this.save()
}

const User = mongoose.model('User', userSchema)

module.exports = User
