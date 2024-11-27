require('dotenv').config()
const e = require('express')
const passport = require('passport')

const app = e()

const port = process.env.PORT

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('Connected to MongoDB Atlas.'));

app.get('/', (req, res) => {
	res.send('Hello from root!')
})

app.listen(port, () => {
	console.log(`The pets are up for adoption in the API port ${port}`)
})
