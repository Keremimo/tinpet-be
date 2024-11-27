const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 4,
        unique: [true, 'The username is already in use :(.'],
        required: true
    },
    password: {
        type: String,
        minLength: [8, 'The password must have at least 8 characters.'],
        required: true
    },
    email: {
        type: String,
        unique: [true, 'Email already exists.'],
        match: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    }
});