const express = require('express')
const greeting = require('./greetingMid')

const app = express()

// middleware
app.use(greeting('Bruno'))

// middleware - for all requests
app.use((req, res, next) => {
	console.log('/ middleware')
	next()
})

// middleware
app.use('/hello-use', (req, res, next) => {
	console.log('/hello-use middleware')
	next()
})

// use run in all methods
// use run in all requests
app.use('/hello-use', (req, res, next) => {
	console.log('/hello-use is being performed')
	res.send('Hello <b>use</b>')
	next()
})

// middleware
app.use('/hello-use', (req, res, next) => {
	console.log('/hello-use has already been performed')
	next()
})

// all run in all methods
app.all('/hello-all', (req, res) => {
	res.send('Hello <b>all</b>')
})

app.get('/hello-get', (req, res) => {
	res.send('Hello <b>get</b>')
})

app.get('/hello-get-json', (req, res) => {
	res.json({name: 'Hello from json'})
})

app.get('/hello-get-array-json', (req, res) => {
	res.json({
		data: [
			{name: 'Bruno', status: 'on'},
			{name: 'John', status: 'off'}
		],
		// useful for pagination
		count: 20,
		skip: 0,
		limit: 2,
		status: 200
	})
})

// middleware for all requests
app.use((req, res) => {
	console.log('/ has already been performed')
})

app.listen(3000, () => {
	console.log('Server running on port 3000')
})