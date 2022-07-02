const express = require('express')
const bodyParser = require('body-parser')
const greeting = require('./greetingMid')
const userApi = require('./api/user')

const app = express()

// product
// already works
// require('./api/product')(app, 'With param')


// optional
const productApi = require('./api/product')
productApi(app, 'With param')

// user
app.post('/user', userApi.save)
app.get('/user', userApi.get)

// middleware - header text/plain
app.use(bodyParser.text())

// middleware - header application/json
app.use(bodyParser.json())

// middleware - header application/x-www-form-urlencoded
// extende: true - to allow more data typs than the default specification
app.use(bodyParser.urlencoded({extended: true}))

// middleware
app.use(greeting('Bruno'))

// middleware - for all requests
app.use((req, res, next) => {
	console.log('/ middleware')
	next()
})

// in POST, params should be passed in body
app.post('/body', (req, res) => {

	// We do this way 'cause we don't use body parser middleware
	// we receive a stream of data
	let body = ''
	req.on('data', (chunk) => body += chunk)

	req.on('end', () => {
		res.send(body)
	})
})

// Now, we use body-parser middleware
app.post('/body-parser', (req, res) => {	
	res.send(req.body)
})

// it comes first because it is more specific
app.get('/clients/report', (req, res) => {
	let { complete, year} = req.query
	console.log(complete, year)
	res.send(`Client report: complete: ${complete} year: ${year}`)
})

// comes after the more specific
// ... and beyond
app.get('/clients/:id', (req, res) => {
	res.send(`Client ${req.params.id}`)
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