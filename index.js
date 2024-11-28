require('dotenv').config()
const e = require('express')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const LocalStrategy = require('passport-local')
const User = require('./models/User')
const jwt = require('jsonwebtoken')

const app = e()

const port = process.env.PORT

//TODO: Move middlewares to an exported module later
app.use(e.urlencoded({ extended: true })) // For parsing req.body
app.use(e.json()) // For parsing incoming JSON
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create({ //INFO: Will save session data to MongoDB.
		mongoUrl: process.env.MONGO_URI,
		ttl: 14 * 24 * 60 * 60,
		autoRemove: 'interval',
		autoRemoveInterval: 10 //INFO: this number is in minutes
	}),
	cookie: {
		secure: process.env.NODE_ENV === 'production',
		httpOnly: true,
		//TODO: Add sameSite later to prevent CSRF
		maxAge: 14 * 24 * 60 * 60 * 1000 //INFO: Expires in 14 days
	}
}))

function generateAccessToken(user) { // JWT Generation
	return jwt.sign({
		id: user._id,
		username: user.username
	},
		process.env.JWT_SECRET,
		{
			expiresIn: '24h'
		}
	)
}

function authenticateToken(req, res, next) { // Middleware to verify JWT

}

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB Atlas.'));

app.post('/api/v1/register', async (req, res) => {
	try {
		const { username, email, password } = req.body
		const registeredUser = await User.register(new User({ username: username, email: email }), password)
		const token = generateAccessToken(registeredUser)
		res.status(201).json({
			message: "Registration successful!",
			user: {
				id: registeredUser._id,
				username: registeredUser.username
			},
			token
		})
		//INFO: Returns JSON in either case, check for result in the JSON it can either be "Success" or "Fail" and make your frontend code act accordingly.
	} catch (error) {
		res.status(500).json({ message: "Error when registering: " + error.message })
	}

})

app.listen(port, () => {
	console.log(`The pets are up for adoption in the API port ${port}`)
})
