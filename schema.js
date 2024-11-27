const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: [4, 'The username is too short'],
        maxLength: [16, 'The username is too long'],
        unique: [true, 'The username is already in use :(.'],
        required: true,
        trim: true
    },
    password: {
        type: String,
        minLength: [8, 'The password must have at least 8 characters.'],
        maxLength: [16, 'The password can not be longer than 16 characters'],
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: [true, 'Email already exists.'],
        match: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 
        require: true,
        trim: true
    }
});

module.exports = userSchema;