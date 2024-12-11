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
	cookie: {
		secure: process.env.NODE_ENV === 'production',
		httpOnly: true,
		//TODO: Add sameSite later to prevent CSRF
		maxAge: 14 * 24 * 60 * 60 * 1000 //INFO: Expires in 14 days
	}
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

function isAuthenticated(req, res, next) {
	console.log(req.user)
	if (req.user) {
		console.log('Authenticated successfully')
		return next()
	}
	console.log('Not authenticated!')
	return res.redirect('/login')
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
		const newUser = new User({
			username: username,
			email: email,
			name: name
		})

		User.register(newUser, password, (err, user) => {
			if (err) {
				console.error('Registration error:', err);
				return res.status(500).json({
					message: "Error when registering",
					error: err.message
				})
			}

			// If user is not properly created, return an error
			if (!user) {
				return res.status(500).json({
					message: "User registration failed",
					error: "User object is undefined"
				})
			}

			req.login(user, (loginErr) => {
				if (loginErr) {
					console.error('Login error:', loginErr)
					return res.status(500).json({
						message: "Error logging in after registration",
						error: loginErr.message
					})
				}

				let token;
				try {
					token = generateAccessToken(user)
				} catch (tokenErr) {
					console.error('Token generation error:', tokenErr)
					return res.status(500).json({
						message: "Error generating access token",
						error: tokenErr.message
					})
				}

				res.status(201).json({
					message: "Registration successful!",
					user: {
						id: user._id,
						username: user.username
					}
				})
			})
		})
	} catch (err) {
		console.error('Catch block error:', err);
		res.status(500).json({
			message: "Error when registering: ",
			error: err.message
		})
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

const postAnimal = async (req, res) => {
	try {
		const { entries } = req.body
		Pet.insertMany([{ ...entries }])
		res.status(200).json({ message: "Successfully posted the new pet." })
	} catch (err) {
		res.status(500).json({ message: "Error posting pet: " + err.message })
	}
}

const findAnimals = async (req, res) => {
	try {
		const { searchParams } = req.body
		const foundPets = await Pet.find({ ...searchParams })
		console.log(req.query.id, foundPets)
		res.status(200).json({ foundPets })
	} catch (err) {
		res.status(500).json({
			message: "An error occurred fetching the data: " + err.message
		})
	}
}

mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB Atlas.'))

app.get('/api/v1/pets/get-all', isAuthenticated, getAllAnimals)

app.get('/api/v1/pets/find', findAnimals)

app.post('/api/v1/register', register)

app.post('/api/v1/login', passport.authenticate('local'), login)

app.listen(port, () => {
	console.log(`The pets are up for adoption in the API port ${port}`)
})
