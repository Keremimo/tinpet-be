const e = require('express')

const app = e()

const port = 3001

app.get('/', (req, res) => {
	res.send('Hello from root!')
})

app.listen(port, () => {
	console.log(`The pets are up for adoption in the API port ${port}`)
})
