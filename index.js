require('dotenv').config()
const e = require('express')

const app = e()

const port = process.env.PORT

const mongoose = require('mongoose')

try {
	const connection = mongoose.connect(process.env.MONGO_URI)
		.then(() => console.log('Connected to MongoDB Atlas.'));
	if (!connection) { throw new Error("Failed to connect!") }
}
catch (err) {
	console.log(err.message)
}


app.get('/', (req, res) => {
	res.send('Hello from root!')
})

app.listen(port, () => {
	console.log(`The pets are up for adoption in the API port ${port}`)
})
