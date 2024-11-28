require('dotenv').config()
const e = require('express')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('mongoose')
const session = require('express-session')
const LocalStrategy = require('passport-local')
const User = require('./models/User')

const app = e()

const port = process.env.PORT

//TODO: Move middlewares to an exported module later
app.use(e.urlencoded({ extended: true })) // For parsing req.body
app.use(e.json()) // For parsing incoming JSON
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false } //FIX: MAKE SECURE TRUE FOR PRODUCTION! DO NOT FORGET!
}))

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB Atlas.'));

app.get('/', (req, res) => {
	res.send('Hello from root!')
})

app.post('/api/v1/register', (req, res) => {
	User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, (err, user) => {
		if (err) {
			const error = err.message
			res.status(500).json({ result: "Fail", data: "An error has occurred while registering." })
			return
			//INFO: Returns nothing, it is to prevent code from reaching passport.authenticate upon error
		}
		passport.authenticate('local')(req, res, () => { res.status(200).json({ result: "Success", data: user }) })
		//INFO: Returns JSON in either case, check for result in the JSON it can either be "Success" or "Fail" and make your frontend code act accordingly.
	})
})

app.listen(port, () => {
	console.log(`The pets are up for adoption in the API port ${port}`)
})
