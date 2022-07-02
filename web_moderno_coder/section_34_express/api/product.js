module.exports = (app, text) => {
	function save(req, res) {
		res.send('Product > save > ' + text)
	}

	function get(req, res) {
		res.send('Product > get > ' + text)
	}

	app.post('/product', save)
	app.get('/product', get)

	// optional thing is to return the functions
	// because app.use already register the endpoints
	return { save, get }
}