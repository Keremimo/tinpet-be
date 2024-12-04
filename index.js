require('dotenv').config()
const e = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const LocalStrategy = require('passport-local')
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const Pet = require('./models/Pet')

const app = e()

const port = process.env.PORT

const corsOptions = {
	credentials: true,
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//TODO: Move middlewares to an exported module later
app.use(e.urlencoded({ extended: true })) // For parsing req.body
app.use(e.json()) // For parsing incoming JSON
app.use(cors(corsOptions))
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

const login = async (req, res) => {
	try {
		if (req.user) {
			const user = req.user
			await user.updateLastLogin()

			const token = generateAccessToken(user)

			res.cookie('token', token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				// sameSite: 'strict', //TODO: make sure this is enabled later in prod
				maxAge: 24 * 60 * 60 * 1000 // 24 hours
			})

			res.json({
				message: 'Login successful',
				user: {
					id: user._id,
					username: user.username
				}
			})
		} else {
			res.status(401).json({ message: 'Authentication failed.' })
		}
	} catch (err) {
		res.status(500).json({
			message: 'Error logging in:',
			error: err.message
		})
	}
}

const register = async (req, res) => {
	try {
		const { username, email, password, name } = req.body
		const registeredUser = await User.register(new User({ username: username, email: email, name: name }), password)
		const token = generateAccessToken(registeredUser)

		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			//TODO: Replace this line with sameSite: 'strict' in prod
			maxAge: 14 * 24 * 60 * 60 * 1000 // 14 days
		})

		res.status(201).json({
			message: "Registration successful!",
			user: {
				id: registeredUser._id,
				username: registeredUser.username
			}
		})
		//INFO: Returns JSON in either case, check the code above for success and below for failure to see what kind of return you can get and code your logic accordingly.
	} catch (error) {
		res.status(500).json({ message: "Error when registering: ", error: err.message })
	}
}

const getAllAnimals = async (req, res) => {
	try {
		const petList = await Pet.find({})
		res.status(200).json(petList)
	} catch (err) {
		res.status(500).json({ message: "Error fetching pets: ", error: err.message })
	}
}

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB Atlas.'));

app.get('/api/v1/pets/get-all', getAllAnimals)

app.post('/api/v1/register', register)

app.post('/api/v1/login', passport.authenticate('local'), login)

app.listen(port, () => {
	console.log(`The pets are up for adoption in the API port ${port}`)
})
