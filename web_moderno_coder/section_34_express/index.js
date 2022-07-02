const express = require('express')

const app = express()

// use run in all methods
// use run in all requests
app.use('/hello-use', (req, res) => {
	res.send('Hello <b>use</b>')
})

// all run in all methods
app.all('/hello-all', (req, res) => {
	res.send('Hello <b>all</b>')
})

app.get('/hello-get', (req, res) => {
	res.send('Hello <b>get</b>')
})

app.listen(3000, () => {
	console.log('Server running on port 3000')
})